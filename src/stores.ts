import { Product, Review } from "./Product";
import { derived, writable } from "svelte/store";

export const products = writable<Product[]>([
	new Product(
		"Office Chair",
		1200,
		400,
		[
			"furniture",
		],
		[
			"Classic swivel office chair with good lumbar support.",
			"With a height-adjustable, swivel soft leather chair, this office chair will support your posture for those long hours at work."
		],
		"/img/office-chair.png",
		[
			Review(5, "Brian Murphy", "This chair is great!"),
			Review(1, "Brennan Lee Mulligan", "This chair is the worst thing to ever disgrace my office!"),
			Review(3, "Emily Axford", "This chair is okay!"),
			Review(4, "Allie Beardsly"),
			Review(5, "Zach Oyama"),
			Review(4, "Pat Cassels"),
			Review(5, "Sam Reich"),
			Review(5, "Josh Ruben"),
			Review(5, "Siobhan Thompson"),
		]
	),
	new Product(
		"Simple Desk Chair",
		400,
		1000,
		[
			"furniture"
		],
		[
			"Simple, affordable desk chair with backrest & carry handle.",
		],
		"/img/simple-chair.png",
		[
			Review(4, "Rekha Shankar", "You get what you pay for."),
			Review(3, "Brennan Lee Mulligan", "This chair is okay. Uncomfortable after a while."),
			Review(1, "Dan Gurewitch", "Broke after 2 days. The fact that I weigh 180kg has nothing to do with it."),
			Review(1, "Adam Conover", "Rather pay a bit more and get a more comfortable chair. This is one is not worth the money."),
			Review(2, "Streeter Seidell", "Returned after a few days. Too low for my desk."),
			Review(4, "Emily Axford"),
			Review(3, "Raphael Chestang"),
		]
	),
	new Product(
		"Gaming Chair",
		3000,
		50,
		[
			"furniture"
		],
		[
			"High back gaming chair with adjustable armrests.",
			"This chair is designed with comfort in mind and supports your back and neck while you play your favorite games for hours on end."
		],
		"/img/gaming-chair.png",
		[
			Review(5, "Mike Trapp", "I have never been more comfortable in my life. This chair is fantastic. Now I can play fortnight for a fortnight."),
			Review(1, "Leroy Jenkins", "This chair didn't make me better at a single game. Returned."),
			Review(5, "Katie Marovitch", "Bought it for my husband. He loves it. Very comfortable."),
			Review(4, "Grant O'Brien", "A bit expensive, but worth it."),
			Review(5, "Caldwell Tanner"),
			Review(5, "Brennan Lee Mulligan"),
			Review(5, "Josh Ruben"),
			Review(5, "Siobhan Thompson"),
		]
	),
	new Product(
		"Black Leather Armchair",
		2500,
		20,
		[
			"furniture"
		],
		[
			"Luxurious black leather armchair with detatchable back cushion.",
			"There is nothing better than coming home after a long hard day and sinking into this luxurious armchair."
		],
		"/img/armchair.png",
		[
			Review(1, "Karen Anoy Yang", "I cannot believe you would sell a leather product on this site. Don't you know that leather is made from the skin of animals? I am disgusted. I bought this chair just so I could comment this. Very comfortable though."),
		]
	),
	new Product(
		"White kitchen chair",
		300,
		200,
		[
			"furniture",
			"kitchenware",
		],
		[
			"Simple, elegant white kitchen chair with a backrest."
		],
		"/img/white-kitchen-chair.png",
		[
			Review(5, "Brennan Lee Mulligan", "These chairs are fantastic. I bought 4 of them and they look great in my kitchen."),
			Review(3, "Rekha Shankar", "I bought 2 of these chairs and they are okay. Nothing special."),
			Review(3, "Dan Gurewitch", "I bought 6 and one of them came broken. The rest are fine."),
			Review(4, "Emily Axford"),
			Review(4, "Brian Murphy"),
		]
	),
	new Product(
		"Cream kitchen chair",
		300,
		187,
		[
			"furniture",
			"kitchenware",
		],
		[
			"Simple, elegant cream kitchen chair with a backrest.",
			"Made from high quality materials, this chair is built to last."
		],
		"/img/cream-kitchen-chair.png",
		[
			Review(1, "Marissa High", "Whoever thought fabric kitchen chairs was a good idea is an idiot. I bought 4 of these and they are a nightmare to clean. I will never buy fabric chairs again."),
			Review(3, "Oren Brimer", "Comfortable, but they get dirty very easily."),
			Review(3, "Mitch Magee"),
			Review(4, "Will Hines"),
		]
	),
	new Product(
		"Black Couch Set",
		5000,
		10,
		[
			"furniture",
		],
		[
			"Gorgeous black leather corner couch.",
			"Made from high quality leather, this couch is extremely comfortable and will last for many years. It is also very easy to clean."
		],
		"/img/black-couch.png",
		[
			Review(5, "Dan Eckman", "Very high quality. Even came with some coins under the seat."),
			Review(5, "Ryan Moulton"),
		]
	),
	new Product(
		"Best couch good",
		10000,
		1,
		[
			"furniture",
		],
		[
			"Very comfortable couch good with a unique design.",
			"Good value, quality is best. No better couch in market. Buy now."
		],
		"/img/odd-couch.png",
		[]
	),
	new Product(
		"Modern Wall Clock",
		200,
		100,
		[
			"decor",
		],
		[
			"Modern wall clock with a simple elegant design.",
			"Analogue clock with a black frame, black numbers and a white background.",
			"Batteries not included."
		],
		"/img/analog-clock.png",
		[
			Review(4, "Kevin Corrigan", "I bought this clock for my kitchen. It looks great and is very easy to read."),
			Review(4, "Jeff Rubin", "Does what is is supposed to do."),
			Review(2, "Dan Meth", "Can't change the speed to fit my fast paced lifestyle. Returned."),
			Review(4, "Brennan Lee Mulligan"),
			Review(4, "Josh Ruben"),
		]
	),
	new Product(
		"Large Analog Wall Clock",
		300,
		50,
		[
			"decor",
		],
		[
			"Large wall clock with a simple elegant design.",
			"Batteries not included. Please note that this clock is not waterproof, so please do not place it in the bathroom.",
		],
		"/img/wall-clock.png",
		[
			Review(4, "Veronica Rodriguez", "I bought this clock for my living room. It is bigger than it looks in the picture."),
			Review(4, "Connie Spircy", "Is it just me or does this clock have an extra hand?"),
			Review(5, "Julia Bales"),
		]
	),
	new Product(
		"Classic Copper Pot Set",
		500,
		100,
		[
			"kitchenware",
		],
		[
			"Classic copper pot set with 3 pots of different sizes and 2 saucepans.",
			"Tin lining on the inside of the pots and pans to prevent food from coming into contact with the copper.",
		],
		"/img/copper-pots.png",
		[
			Review(5, "Kevin Etherson", "Just bought these, they look great in my rustic kitchen."),
			Review(1, "Rebekka Johnson", "The tin scrapes off into the food. My entire family got severely ill. DO NOT BUY."),
		]
	),
	new Product(
		"Stainless Steel Pot Set",
		300,
		200,
		[
			"kitchenware",
		],
		[
			"Stainless steel pot set with 3 pots of different sizes.",
			"Made from high quality stainless steel. Unlike copper, stainless steel is easy to clean and will not react with food.",
		],
		"/img/stainless-steel-pots.png",
		[
			Review(5, "Rebekka Johnson", "Definitely better than the copper ones."),
			Review(5, "Chris Capel"),
			Review(4, "Tom A. Capps")
		]
	),
	new Product(
		"Knife Set",
		800,
		34,
		[
			"kitchenware",
		],
		[
			"Set of 5 high quality knives with a black marble knife block.",
		],
		"/img/knife-set.png",
		[
			Review(4, "Amber Schaefer", "Very good quality knives. The block is nice and heavy. 4/5 because it says there are 5 knives but there are only 4."),
			Review(1, "Stoney Sharp", "Cut my finger off when I was opening the box. I will never buy knives online again."),
			Review(3, "Tom A. Capps", "Too expensive for what you get."),
			Review(5, "Ben Weinstein"),
			Review(4, "Milana Vayntrub"),
		]
	),
	new Product(
		"White Plate Set",
		200,
		128,
		[
			"kitchenware",
		],
		[
			"Set of 10 white plates of varying sizes.",
		],
		"/img/plates.png",
		[
			Review(2, "Stoney Sharp", "These plates are very fragile. I dropped one and it shattered into a million pieces."),
			Review(4, "Tom A. Capps", "Good value for the price."),
			Review(5, "Ben Weinstein"),
		]
	),
	new Product(
		"Hexagon Wall Shelves",
		500,
		50,
		[
			"decor",
		],
		[
			"Wacky hexagon wall shelves.",
			"Made from high quality wood, these shelves are very sturdy and can hold a lot of weight.",
		],
		"/img/hexagon-shelves.png",
		[
			Review(5, "Breanna Yde", "I bought these shelves for my drunk bee themed bar. They look great!"),
			Review(4, "Adam Catino", "A bit odd looking, but they do the job."),
			Review(4, "Tom A. Capps"),
		]
	),
	new Product(
		"Wooden Wall Shelves",
		600,
		30,
		[
			"decor",
		],
		[
			"Funny looking wooden wall shelves.",
			"What do you want from me, I've had to write so many of these at this point.",
		],
		"/img/wacky-shelves.png",
		[
			Review(5, "Jay Buim", "Super strange looking. I love it"),
			Review(3, "Brian Murphy", "The section at the top seems a bit flimsy. We'll see how it holds up."),
		]
	),
	new Product(
		"Throw Cushions",
		250,
		69,
		[
			"decor",
		],
		[
			"Set of 2 throw cushions with a unique design.",
			"Made from high quality cotton, these cushions are very comfortable, and can be machine washed.",
		],
		"/img/throw-cushions.png",
		[
			Review(5, "Breanna Yde", "I bought these cushions for my drunk bee themed bar. They go great with the hexagon shelves!"),
			Review(4, "Adam Catino", "A strange design, but they are very comfortable."),
			Review(3, "Stoney Sharp", "I somehow managed to stub my toe on these. I'm not sure how."),
		]
	),
	new Product(
		"Large Cushions",
		500,
		420,
		[
			"decor",
		],
		[
			"Set of 8ish striped cushions with a black, white and yellow design.",
		],
		"/img/cushions.png",
		[
			Review(4, "Jay Buim"),
			Review(3, "Mike Trapp"),
		]
	),
	new Product(
		"Simple Coffee Table",
		500,
		32,
		[
			"furniture",
			"decor",
		],
		[
			"A Simple elegant coffee table made of reclaimed wood.",
			"Not made for outdoor use.",
		],
		"/img/coffee-table.png",
		[]
	),
	new Product(
		"Rustic Kitchen Table",
		1000,
		50,
		[
			"furniture",
			"kitchenware",
		],
		[
			"A rustic wooden kitchen table made from ethically farmed organic cruelty free non GMO pine.",
			"For indoor or outdoor* use.",
			"*Not recommended for outdoor use.",
		],
		"/img/kitchen-table.png",
		[
			Review(3, "Karen Anoy Yang", "Finally, something I can buy with a clear conscience."),
			Review(2, "Stoney Sharp", "I bought this table for my patio, but it got ruined when it rained. On the plus side, the fancy wood makes great kindling."),
		]
	)
]);
export const totalItems = writable(0);

class Cart {
	contents: Set<Product> = new Set<Product>();
	#items: number;
	constructor() {
		this.#items = 0;
		this.contents = new Set<Product>();
	}
	public addProduct(product: Product, quantity: number) {
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

export const cart = writable(new Cart());