import { Fragment } from "react";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const MENU: MenuCategory[] = [
  {
    name: "Coffee",
    items: [
      { name: "Espresso", price: "3.5 dt" },
      { name: "Flat White", price: "6.0 dt" },
      { name: "Cold Brew", price: "6.5 dt" },
    ],
  },
  {
    name: "Tea",
    items: [
      { name: "Mint Tea", price: "4.0 dt" },
      { name: "Chai Latte", price: "5.5 dt" },
    ],
  },
  {
    name: "Food",
    items: [
      { name: "Croissant", price: "3.0 dt" },
      { name: "Banana Bread", price: "4.5 dt" },
    ],
  },
];

export default function Menu() {
  return (
    <section aria-label="Menu" id="menu" className="px-6 py-16 md:py-24 md:px-12">
      <div className="max-w-xl mx-auto flex flex-col gap-4">

        <div className="text-center flex flex-col gap-4 mb-8">
          <p className="text-xs uppercase tracking-widest text-gold">What we serve</p>
          <h2 className="text-4xl md:text-5xl font-bold">The menu</h2>
        </div>

        {MENU.map((category) => (
          <Fragment key={category.name}>
            <h3 className="text-xs uppercase tracking-widest text-gold mt-6 mb-1">
              {category.name}
            </h3>

            <ul className="flex flex-col">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline gap-2 py-2"
                >
                  <span className="text-dark">{item.name}</span>
                  <span className="flex-1 border-b border-dotted border-brown/30 -translate-y-1" />
                  <span className="text-sm text-muted">{item.price}</span>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}

      </div>
    </section>
  );
}