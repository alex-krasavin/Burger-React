import { API_URL } from "../CONST";
import style from "./CatalogProduct.module.css";
import { useDispatch} from "react-redux";
import {addProduct} from "../../../store/order/orderSlice";

export const CatalogProduct = ({item}) => {
    const dispatch = useDispatch();
    return (
        <article className={style.product}>
            <img src={`${API_URL}/${item.image}`} alt={item.title} className={style.image}/>

            <p className={style.price}>{item.price}<span className="currency">&nbsp;₽</span></p>

            <h3 className={style.title}>
            <button className={style.detail}>{item.title}</button>
            </h3>

            <p className={style.weight}>{item.weight}</p>

            <button 
                className={style.add} 
                type="button"
                onClick = {() => {
                    dispatch(addProduct({id: item.id}))
                }}>Добавить</button>
        </article>
        )
}