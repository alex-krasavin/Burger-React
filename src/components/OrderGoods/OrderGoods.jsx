import { API_URL } from "../Catalog/CONST";
import { Count } from "../Count/Count";
import style from "./OrderGoods.module.css";

export const OrderGoods = ({title,price,image,weight,count,id}) => {
    return (
        <li className={style.item}>
            <img className={style.image} src={`${API_URL}/${image}`} alt={title}/>

            <div className={style.goods}>
                <h3 className={style.title}>{title}</h3>

                <p className={style.weight}>{weight}г</p>

                <p className={style.price}>{price}
                    <span className="currency">&nbsp;₽</span>
                </p>
            </div>
            <Count count = {count} id ={id}/>
    </li>
    )
}