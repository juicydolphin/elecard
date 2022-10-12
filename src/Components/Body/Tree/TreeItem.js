import React from 'react';
import s from "../Grid/GridItem/gridItem.module.css";

const TreeItem = (props) => {
    let baseUrl = "http://contest.elecard.ru/frontend_data/"

    let toDate = (timestamp) => {
        let date = new Date()
        date.setTime(timestamp)
        return ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()
    }
    let toKilobyte = (filesize) => {
        filesize = filesize/1024
        return filesize.toFixed()+" Кб"
    }

    return (
        <details>
            <summary>{"Изображение "+props.id}</summary>
            <div><a href={baseUrl+props.image}  target="blank"><img height="250" width="250" src={baseUrl+props.image}/></a></div>
            <div className={s.gridItemData}>Размер файла: <span className={s.gridItemMainData}>{toKilobyte(props.filesize)}</span></div>
            <div className={s.gridItemData}>Дата: <span className={s.gridItemMainData}>{toDate(props.timestamp)}</span></div>
            <div className={s.gridItemData}>Категория: <span className={s.gridItemMainData}>{props.category[0].name}</span></div>
        </details>

    );
};

export default TreeItem;