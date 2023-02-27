
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/order/orderSlice";
import style from "./Count.module.css";

export const Count = ({count,id}) => {  
    const dispatch = useDispatch();

    const countDicrement = () => {
        dispatch(removeProduct({id}))
    };

    const countIncrement = () => {
       dispatch(addProduct({id}))
    };
        

    return ( 
        <div className={style.count}>
            <button onClick={countDicrement} className={style.minus}>-</button>
            <p className={style.amount}>{count}</p>
            <button onClick={countIncrement} className={style.plus}>+</button>
        </div>
    );
}