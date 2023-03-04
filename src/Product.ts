class UUIDGenerator {
	static #index = 10000;
	static next() {
		return `${(++UUIDGenerator.#index).toString(32)}`;
	}
}

function roundTo(num: number, places: number) {
	return Math.round(num * 10 ** places) / 10 ** places;
}

export const Categories = {
	"furniture": new Set<Product>(),
	"decor": new Set<Product>(),
	"kitchenware": new Set<Product>(),
};

export class Product {
	static #products: Map<string, Product> = new Map<string, Product>();
	name: string;
	id: string;
	price: number;
	stock: number;
	description: string[];
	image: string;
	reviews: Review[];
	/** The quantity of this item selected by the customer */
	selected: number;
	constructor(name: string, price: number, stock: number, categories: (keyof typeof Categories)[], description: string[], image: string, reviews: Review[]) {
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.description = description;
		this.image = image;
		this.reviews = reviews;
		this.selected = 0;
		for (const category of categories) {
			Categories[category].add(this);
		}
		this.id = UUIDGenerator.next();
		Product.#products.set(this.id, this);
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
}

export class Review {
	comment: string | undefined;
	rating: number;
	userName: string;
	constructor(rating: number, userName: string, comment?: string) {
		this.comment = comment;
		this.rating = rating;
		this.userName = userName;
	}
}