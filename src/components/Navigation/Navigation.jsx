import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryRequestAsync } from "../../store/category/categorySlice";
import { changeCategory } from "../../store/category/categorySlice";
import { API_URL } from "../Catalog/CONST";
import { Container } from "../Container/Container";
import style from "./Navigation.module.css";

export const Navigation = () => {
    const {category,activeCategory} = useSelector(state => state.category);
    const dispath = useDispatch()

    useEffect(() => {
      dispath(categoryRequestAsync())  
    },[])

    return (
        <nav className={style.navigation}>
            <Container className={style.container}>
                <ul className={style.list}>
                    {category.map((item,i) => 
                        <li className={style.item} key={item.title}>
                            <button className={classNames(
                                style.button,
                                activeCategory === i ? style.button_active : "")}
                                style = {{backgroundImage:`url(${API_URL}/${item.image})`}}
                                onClick = {() => {
                                    dispath(changeCategory({indexCategory:i}))
                                }}
                            >
                                {item.rus}
                            </button>
                        </li>
                    )}
                </ul>
            </Container>
        </nav>
    )
}