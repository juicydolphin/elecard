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
                <div className={s.deleteButton} onClick={() => props.deleteCard(props.image)}><button/></div>
            </div>
            <img className={s.gridImage} src={baseUrl+props.image}/>
            <div className={s.gridItemDataBlock}>
                <p className={s.gridItemData}>Размер файла: <span className={s.gridItemMainData}>{toKilobyte(props.filesize)}</span></p>
                <p className={s.gridItemData}>Дата: <span className={s.gridItemMainData}>{toDate(props.timestamp)}</span></p>
                <p className={s.gridItemData}>Категория: <span className={s.gridItemMainData}>{props.category[0].name}</span></p>
            </div>
        </div>
    );
};

export default GridItem;