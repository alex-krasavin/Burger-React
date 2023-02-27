import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsycn } from "../../store/product/productSlice";
import { Container } from "../Container/Container"
import { Order } from "../Order/Order"
import style from "./Catalog.module.css";
import { CatalogProduct } from "./CatalogProduct/CatalogProduct";


export const Catalog = () => {
    const {products} = useSelector(state => state.product);
    const dispatch = useDispatch();
    const {category,activeCategory} = useSelector(state => state.category)
    useEffect (() => {
        if (category.length) {
            dispatch(productRequestAsycn(category[activeCategory].title));
        }
    },[category,activeCategory]);

    return (
        <section className={style.atalog}>
        <Container className={style.container}>
            <Order/>
  
            <div className={style.wrapper}>
                <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
    
                <div className={style.wrap_list}>
                    {products.length ? (
                        <ul className={style.list}>
                            {products.map((item) => (
                                <li key={item.id} className={style.item}>
                                    <CatalogProduct item = {item}/>
                                </li>
                            ))}
                        </ul>
                        ) : "Данного товара нет в наличии"      
                   }
                </div>
            </div>
        </Container>
      </section>
    )
}