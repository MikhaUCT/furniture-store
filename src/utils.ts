import { base } from "$app/paths";

export class UUIDGenerator {
	static #instances = 10000;
	#prefix: string;
	#suffix: string;
	#index: number;
	#global_index: number;
	constructor(prefix: string = "", suffix: string = "") {
		this.#prefix = prefix;
		this.#suffix = suffix;
		this.#global_index = UUIDGenerator.#instances++;
		this.#index = 0;
	}
	next() {
		return this.#prefix +
			(this.#global_index).toString(32) +
			(this.#index++).toString(32) +
			this.#suffix;
	}
}

function roundTo(num: number, places: number) {
	return Math.round(num * 10 ** places) / 10 ** places;
}

export const Categories = {
	"furniture": new Set<Product>(),
	"decor": new Set<Product>(),
	"kitchenware": new Set<Product>(),
	"gaming": new Set<Product>(),
};

// multi word search trie
class SearchTrie<T> {
	leaves: Map<string, SearchTrie<T>>;
	end: boolean;
	values: T[];
	constructor(str?: string, value?: T) {
		this.leaves = new Map<string, SearchTrie<T>>();
		this.end = false;
		this.values = [];
		if (str != null) this.add(str, value!);
	}
	add(str: string, value: T) {
		str = str.toLowerCase();
		if (str.length === 0) {
			this.end = true;
			this.values.push(value);
			return;
		}
		if (!this.leaves.has(str[0])) {
			this.leaves.set(str[0], new SearchTrie(str.slice(1), value));
		} else {
			this.leaves.get(str[0])!.add(str.slice(1), value);
		}
	}
	getResultsFor(str: string): T[] {
		str = str.toLowerCase();
		const results = [];
		let node: SearchTrie<T> | undefined = this;
		for (let i = 0; i < str.length; ++i) {
			node = node.leaves.get(str[i]);
			if (!node) return [];
		}
		results.push(...node.getValues());
		return results;
	}

	getValues(): T[] {
		const values = [...this.values];
		for (const leaf of this.leaves.values()) {
			values.push(...leaf.getValues());
		}
		return [...new Set(values)];
	}
}

export class Product {
	static #IDGenerator = new UUIDGenerator("p-");
	static nameTrie = new SearchTrie<Product>();
	static #products: Map<string, Product> = new Map<string, Product>();
	name: string;
	id: string;
	price: number;
	/** The quantity of this item currently in stock (the max that can be purchased) */
	stock: number;
	description: string[];
	image: string;
	categories: (keyof typeof Categories)[];
	reviews: Review[];
	/** The quantity of this item selected by the customer */
	selected: number;
	constructor(name: string, price: number, stock: number, categories: (keyof typeof Categories)[], description: string[], image: string, reviews: Review[]) {
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.description = description;
		this.image = base + image;
		this.reviews = reviews;
		this.selected = 0;
		this.categories = categories;
		for (const category of categories) {
			Categories[category].add(this);
		}
		this.id = Product.#IDGenerator.next();
		Product.#products.set(this.id, this);

		const words = name.split(/\s+/);
		for (let i = 0; i < words.length; ++i) {
			Product.nameTrie.add(words.slice(i).join(" "), this);
		}
	}
	static getProduct(id: string) {
		return Product.#products.get(id);
	}
	addReview(review: Review) {
		this.reviews.push(review);
	}
	getRating() {
		if (this.reviews.length === 0) return 0;
		return roundTo(
			this.reviews.reduce((acc, cur) => acc + cur.rating, 0) / this.reviews.length,
			2
		);
	}
	/**
	 * Add n to the quantity of this item selected, provided there is enough stock
	 * @param n - The number of items to add
	 * @returns - The number of items added (may be less than n if there is not enough stock).
	 */
	add(n: number) {
		n = Math.min(this.stock - this.selected, n);
		this.selected += n;
		return n;
	}
	/**
	 * Remove n from the quantity of this item selected, provided there are enough items selected
	 * @param n - The number of items to remove
	 * @returns - The number of items removed (may be less than n if there are not enough items
	 * selected).
	 */
	remove(n: number) {
		n = Math.min(this.selected, n);
		this.selected -= n;
		return n;
	}
	toString() {
		return this.name;
	}
	static search(str: string) {
		return Product.nameTrie.getResultsFor(str.trim());
	}
}

export function Review(rating: number, username: string, comment?: string): Review {
	return {
		comment,
		rating,
		username,
	};
}

/**
 *
 * @param num The number to format
 * @param sections The number of digits between each space
 * @param minChars The minimum width of the result
 * @param fillChar The character to use to fill the result to the minimum width
 */
export function formatNumber(num: number | string, sections: number = 3, minChars: number = 0, fillChar: string = "-"): string {
	const result = [];
	let str = num.toString();
	str += fillChar.repeat(Math.max(0, minChars - str.length));
	for (let i = 0; i < str.length; ++i) {
		if (i % sections === 0 && i !== 0) result.unshift(" ");
		result.unshift(str[str.length - 1 - i]);
	}
	return result.join("");
}