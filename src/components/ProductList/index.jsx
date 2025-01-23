import { ProductCard } from "./ProductCard";
import style from "./index.module.scss"

export const ProductList = ({ productList, filterProduct, addToCart, value }) => {
   return (
      <ul className={style.ul}>
         {value !== "" ? filterProduct.map((product) => (
            <ProductCard addToCart={addToCart} key={product.id} product={product} />
         )) : productList.map((product) => (
            <ProductCard addToCart={addToCart} key={product.id} product={product} />
         ))}
      </ul>
   );
};
