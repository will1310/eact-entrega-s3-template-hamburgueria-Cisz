import { MdDelete } from "react-icons/md";
import style from "../style.module.scss"

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li >
            <section>
               <img src={product.img} alt={product.name} />
               <div>
                  <h3 className="Heading3">{product.name}</h3>
                  <span className="Body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
            </section>
         <button onClick={() => removeFromCart(product)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
