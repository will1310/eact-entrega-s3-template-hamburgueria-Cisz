import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import style from "../HomePage/style.module.scss"

export const HomePage = () => {
   const [loading, setLoading] = useState(false)
   const [productList, setProductList] = useState([]);
   const [isOpen, setIsOpen] = useState(false)
   const [cartList, setCartList] = useState( [] );
   const [value, setValue] = useState("")

   useEffect(() => {
      const getList = async () => {
         try {
            setLoading(true)
            const {data} = await api.get("products");
            setProductList(data)
         } catch (error) {
            console.log(error)
         } finally {
            setLoading(false)
         }
      }
      getList();
   }, []);

   const addToCart = (product) => {
      const productExist = cartList.some((item) => item.id === product.id);
      if(!productExist){
         setIsOpen(true)
         setCartList([...cartList, product]);
         console.log()
      } else {
         alert("Produto já adicionado a lista")
      }
   }


   const removeFromCart = (product) =>{
      setCartList(cartList.filter((cartItem) => cartItem.id !== product.id));
   };

   const remoceAllFromCart = () =>{
      setIsOpen(false)
      setCartList([]);
   }

   const filterProduct = productList.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));

   // --> FEITO <-- useEffect montagem - carrega os produtos da API e joga em productList 
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header value={value} setValue={setValue} cartList={cartList} setIsOpen={setIsOpen} />
         <main >
            <ProductList value={value} filterProduct={filterProduct} addToCart={addToCart} productList={productList} />
            {isOpen ? <CartModal remoceAllFromCart={remoceAllFromCart} setIsOpen={setIsOpen} removeFromCart={removeFromCart} cartList={cartList} /> : <p></p>}
         </main>
      </>
   );
};
