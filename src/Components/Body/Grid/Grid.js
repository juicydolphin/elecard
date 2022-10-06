import React, {useEffect, useState} from 'react';
import s from './grid.module.css'
import GridItem from "./GridItem/GridItem";
import ReactPaginate from "react-paginate";

const Grid = (props) => {

// Пагинация
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 24

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(props.data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(props.data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, props.data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props.data.length;
        setItemOffset(newOffset);
    };
// Пагинация



    return (
        <div className={s.gridWrapper}>
            <div className={s.gridContainer}>
                {currentItems.map(d => <GridItem image={d.image} filesize={d.filesize} timestamp={d.timestamp}
                                                 category={d.category} key={d.id}/>)}

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