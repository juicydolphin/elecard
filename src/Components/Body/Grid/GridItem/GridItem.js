import React from 'react';
import s from './gridItem.module.css'
let baseUrl = "http://contest.elecard.ru/frontend_data/"

const GridItem = (props) => {
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
        <div className={s.gridItem}>
            <div className={s.delete}>
                <button>x</button>
            </div>
            <img className={s.gridImage} src={baseUrl+props.image}/>
            <div className={s.gridItemDataBlock}>
                <p className={s.gridItemData}>Размер файла: {toKilobyte(props.filesize)}</p>
                <p className={s.gridItemData}>Дата: {toDate(props.timestamp)}</p>
                <p className={s.gridItemData}>Категория: {props.category}</p>
            </div>
        </div>
    );
};

export default GridItem;