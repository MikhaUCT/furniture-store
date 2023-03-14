import type { Categories, Product } from "./utils";
import { writable } from "svelte/store";

class Cart {
	contents: Set<Product> = new Set<Product>();
	#items: number;
	constructor() {
		this.#items = 0;
		this.contents = new Set<Product>();
	}
	public addProduct(product: Product, quantity: number = 1) {
		if (!this.contents.has(product)) {
			this.contents.add(product);
		}
		const total = product.add(quantity);
		this.#items += total;
		totalItems.update(n => n + total);
	}
	public removeProduct(product: Product, quantity?: number) {
		if (this.contents.has(product)) {
			if (quantity === undefined) {
				quantity = product.selected;
				this.contents.delete(product);
			};
			const total = product.remove(quantity);
			this.#items -= total;
			totalItems.update(n => n - total);
			if (total === 0) {
				this.contents.delete(product);
			}
		}
	}
	get items() { return this.#items; }
	get total() {
		let total = 0;
		for (const product of this.contents) {
			total += product.selected * product.price;
		}
		return total;
	}
}

export const totalItems = writable(0);

export const cart = writable(new Cart());

export const category = writable<keyof typeof Categories | null>(null);

export const query = writable<string>("");