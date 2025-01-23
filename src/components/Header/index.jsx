import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"

export const Header = ({ setIsOpen, cartList, value, setValue }) => {

   const submit = (e) =>{
      e.preventDefault()
   }

   return (
      <header className={style.headerContainer}>
            <div className={style.divImg}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
            </div>
            <div className={style.divBuyButton}>
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart className={style.buyButton} size={21} />
                <span className="Body-600">{cartList.length}</span>
            </button>
            <form onSubmit={submit}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Filtrar produtos"
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
            </div>
      </header>
   );
};
