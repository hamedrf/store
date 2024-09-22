import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export enum categories {
  bestSeller = "best seller",
  hamburger = "Hamburger",
  drink = "Drink",
  dessert = "Dessert",
  friedChicken = "Fried chicken",
}
export interface product {
  name: string;
  des: string;
  price: Number;
  imgSrc: string;
  categories: categories[];
}
interface productsState {
  filter: categories[];
  allProducts: product[];
  showProducts: product[];
}

const initialState: productsState = {
  filter: [],
  allProducts: [
    {
      name: "Cheese Beef Hamburger",
      des: "fried chicken balls, french fries",
      price: 5.39,
      imgSrc: "./images/products/1.png",
      categories: [categories.hamburger],
    },
    {
      name: "Combo funny",
      des: "fried chicken balls, french fries",
      price: 10.3,
      imgSrc: "./images/products/2.png",
      categories: [categories.friedChicken, categories.bestSeller],
    },
    {
      name: "‌Chicken with Spicy Sauce",
      des: "chili garlic sauce, black pepper sauce",
      price: 7.2,
      imgSrc: "./images/products/3.png",
      categories: [categories.friedChicken],
    },
    {
      name: "‌Salad mixed vinegar",
      des: "Salad, vinegar, tomato",
      price: 5.4,
      imgSrc: "./images/products/4.png",
      categories: [categories.bestSeller],
    },
    {
      name: "Chicken burger",
      des: "fried chicken",
      price: 5.39,
      imgSrc: "./images/products/5.png",
      categories: [categories.hamburger],
    },
    {
      name: "fried chicken",
      des: "some thing",
      price: 2.8,
      imgSrc: "./images/products/6.png",
      categories: [categories.bestSeller],
    },
  ],
  showProducts: [
    {
      name: "Cheese Beef Hamburger",
      des: "fried chicken balls, french fries",
      price: 5.39,
      imgSrc: "./images/products/1.png",
      categories: [categories.hamburger],
    },
    {
      name: "Combo funny",
      des: "fried chicken balls, french fries",
      price: 10.3,
      imgSrc: "./images/products/2.png",
      categories: [categories.friedChicken, categories.bestSeller],
    },
    {
      name: "‌Chicken with Spicy Sauce",
      des: "chili garlic sauce, black pepper sauce",
      price: 7.2,
      imgSrc: "./images/products/3.png",
      categories: [categories.friedChicken],
    },
    {
      name: "‌Salad mixed vinegar",
      des: "Salad, vinegar, tomato",
      price: 5.4,
      imgSrc: "./images/products/4.png",
      categories: [categories.bestSeller],
    },
    {
      name: "Chicken burger",
      des: "fried chicken",
      price: 5.39,
      imgSrc: "./images/products/5.png",
      categories: [categories.hamburger],
    },
    {
      name: "fried chicken",
      des: "some thing",
      price: 2.8,
      imgSrc: "./images/products/6.png",
      categories: [categories.bestSeller],
    },
  ],
};

//if ($('.categories').has('.action').length > 0) {
//   console.log("عنصر با کلاس .action وجود دارد.");
// } else {
//   console.log("عنصر با کلاس .action وجود ندارد.");
// }

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<{ category: categories }>) => {
      if (!state.filter.includes(action.payload.category)) {
        state.filter.push(action.payload.category);
      }

      state.showProducts = state.allProducts.filter((product) =>
        state.filter.some((category) => product.categories.includes(category))
      );
    },
    deletFilter: (state, action: PayloadAction<{ category: categories }>) => {
      state.filter = state.filter.filter(
        (category) => category !== action.payload.category
      );

      if (state.filter.length > 0) {
        state.showProducts = state.allProducts.filter((product) =>
          state.filter.some((category) => product.categories.includes(category))
        );
      } else {
        state.showProducts = state.allProducts;
      }
    },
  },
});

export const { addFilter, deletFilter } = productsSlice.actions;

export default productsSlice.reducer;
