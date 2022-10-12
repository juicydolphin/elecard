import React from 'react';
import s from './tree.module.css'
import TreeItem from "./TreeItem";

const Tree = (props) => {
    let filtrationParams = ({
        categories: [
            {key: 'all', name: 'Все категории'},
            {key: 'animals', name: 'Животные'},
            {key: 'business', name: 'Бизнес'},
            {key: 'food', name: 'Еда'},
            {key: 'health', name: 'Здоровье'},
            {key: 'places', name: 'Места'},
            {key: 'science', name: 'Наука'},
            {key: 'vehicle', name: 'Транспорт'},
            {key: 'winter', name: 'Зима'},
        ]
    })
    return (

        <details className={s.tree}>
            <summary>Изображения</summary>
            {props.data.map((d,i) => <TreeItem image={d.image} filesize={d.filesize} timestamp={d.timestamp}
                                           category={filtrationParams.categories.filter(category => category.key === d.category)} id={i+1}/>)}

        </details>


    )
};

export default Tree;