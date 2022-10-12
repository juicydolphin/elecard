import React, {useEffect, useState} from 'react';
import s from './grid.module.css'
import './animation.css'
import GridItem from "./GridItem/GridItem";
import ReactPaginate from "react-paginate";
import useLocalStorage from "../../../hooks/useLocalStorage";


const Grid = (props) => {


    // Фильтрация
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

    const [filterValue, setFilterValue] = useState('all')
    const [dateFilterValue, setDateFilterValue] = useState('')
    const [sizeFilterValue, setSizeFilterValue] = useState('')
    const [tumbler, setTumbler] = useState('')
    const [filtered, setFiltered] = useState([]);
    const [storage, setStorage] = useLocalStorage('data', props.data)


    let changeSelect = (e) => {
        setFilterValue(e.target.value)
    }

    let changeSizeSelect = (e) => {
        setSizeFilterValue(e.target.value)
        setTumbler('size')
        setDateFilterValue('')
    }

    let changeDateSelect = (e) => {
        setDateFilterValue(e.target.value)
        setTumbler('date')
        setSizeFilterValue('')
    }

    let deleteCard = (cardID) => {
        let data = [...storage]
        setStorage(data.filter((d) => d.image !== cardID))
    }
    let reset = () => {
        setStorage(props.data)
    }

    let getFilteredData = () => {
        let data = [...storage]

        if (filterValue !== 'all') {
            data = data.filter(d => d.category === filterValue)
        }
// eslint-disable-next-line default-case
        switch (tumbler) {
            case 'size':
                if (sizeFilterValue === "ascending") {
                    data = data.sort((a, b) => a.filesize > b.filesize ? 1 : -1)
                } else if (sizeFilterValue === "descending") {
                    data = data.sort((a, b) => a.filesize < b.filesize ? 1 : -1)
                }
            // eslint-disable-next-line no-fallthrough
            case 'date':
                if (dateFilterValue === "ascendingDate") {
                    data = data.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1)
                } else if (dateFilterValue === "descendingDate") {
                    data = data.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
                }
        }
        return data
    }


    useEffect(() => {
        setFiltered(getFilteredData())
    }, [filterValue, sizeFilterValue, dateFilterValue, storage]);

    // Фильтрация

// Пагинация

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 24

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filtered.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filtered.length / itemsPerPage));
    }, [filtered, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filtered.length;
        setItemOffset(newOffset);

    };
    // Пагинация

    return (
        <div className={s.gridWrapper}>
            <form className={s.selector}>
                <p>По категории:</p>
                <select value={filterValue} onChange={changeSelect}>
                    <option value={'all'}>Все категории</option>
                    <option value={'animals'}>Животные</option>
                    <option value={'business'}>Бизнес</option>
                    <option value={'food'}>Еда</option>
                    <option value={'health'}>Здоровье</option>
                    <option value={'places'}>Места</option>
                    <option value={'science'}>Наука</option>
                    <option value={'vehicle'}>Транспорт</option>
                    <option value={'winter'}>Зима</option>
                </select>
                <p>По размеру файла:</p>
                <select value={sizeFilterValue} onChange={changeSizeSelect}>
                    <option value={'random'}>Случайно</option>
                    <option value={"descending"}>По убыванию</option>
                    <option value={"ascending"}>По возрастанию</option>
                </select>
                <p>По дате:</p>
                <select value={dateFilterValue} onChange={changeDateSelect}>
                    <option value={'randomDate'}>Случайно</option>
                    <option value={"descendingDate"}>По убыванию</option>
                    <option value={"ascendingDate"}>По возрастанию</option>
                </select>
                <button className={s.resetButton} onClick={reset}>Сброс</button>
            </form>

            <div className={s.gridContainer}>

                {currentItems.map((d, i) => <GridItem image={d.image} filesize={d.filesize} timestamp={d.timestamp}
                                                      category={filtrationParams.categories.filter(category => category.key === d.category)}
                                                      key={i} del id={i} deleteCard={deleteCard}/>)}

            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="Далее"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Назад"
                renderOnZeroPageCount={null}
                containerClassName={s.paginatorContainer}
                previousLinkClassName={s.linkButton}
                nextLinkClassName={s.linkButton}
                activeClassName={s.active}/>
        </div>

    );
};

export default Grid;