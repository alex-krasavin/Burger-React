import { API_URL } from "../CONST";
import style from "./CatalogProduct.module.css";

export const CatalogProduct = ({item}) => {
    return (
        <article className={style.product}>
            <img src={`${API_URL}/${item.image}`} alt={item.title} className={style.image}/>

            <p className={style.price}>{item.price}<span className="currency">₽</span></p>

            <h3 className={style.title}>
            <button className={style.detail}>{item.title}</button>
            </h3>

            <p className={style.weight}>{item.weight}</p>

            <button className={style.add} type="button">Добавить</button>
        </article>
        )
}