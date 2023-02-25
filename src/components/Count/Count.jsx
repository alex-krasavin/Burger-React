import { useState } from "react";
import style from "./Count.module.css";

export const Count = (props) => {
    let [count,setCount] = useState(props.count);
  
    const countDicrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const countIncrement = () => {
        setCount(count + 1)
    }
    return ( 
        <div className={style.count}>
            <button onClick={countDicrement} className={style.minus}>-</button>
            <p className={style.amount}>{count}</p>
            <button onClick={countIncrement} className={style.plus}>+</button>
        </div>
    );
}