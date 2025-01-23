import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss"

export const CartModal = ({ cartList, removeFromCart, setIsOpen, remoceAllFromCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={style.moduleOverLay} role="dialog">
         <div  className={style.modalBox}>
            <div className={style.fristDiv}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={style.secundDiv}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard removeFromCart={removeFromCart} key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div className={style.thirdDiv}>
               <div>
                  <span className="Body-600">Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className="Body-600" onClick={remoceAllFromCart}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
