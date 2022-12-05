import { productList } from "./data";

const getProductsOfNormalQuality = (pProduct) => {
  return pProduct.filter((product) => product.quality === "Normal");
};

const getProductImageWithPngExtension = (pProduct) => {
  return pProduct.filter((product) => product.productImage.endsWith(".png"));
};

const getCalorieOfTheMostExpensiveProduct = (pProduct) => {
  let result = Math.max(...pProduct.map((product) => product.price));
  return pProduct.find((product) => product.price === result).totalCalories;
};

const sortByExpirationDate = (pProduct) => {
  return pProduct.sort(
    (x, y) => new Date(x.expireDate) - new Date(y.expireDate)
  );
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
