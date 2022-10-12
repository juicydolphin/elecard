import React, {useState} from 'react';
import s from './body.module.css'
import Grid from "./Grid/Grid";
import {useGetDataQuery} from "../../store/api/api";
import Preloader from "../Common/Preloader/Preloader";
import Tree from "./Tree/Tree";

const Body = () => {


    const {data, error, isLoading} = useGetDataQuery()
    const [viewMode,setViewMode] = useState(true)
    let changeViewMode = () => {
        setViewMode(!viewMode)
    }
    return (
        <div className={s.container}>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Preloader/>
            ) : data ? (<div>
                <button onClick={changeViewMode} className={s.button}>Сменить режим отображения</button>
                    {viewMode ? <Grid data={data}/> : <Tree data={data}/>}
            </div>
            ) : null}
        </div>
    );
};

export default Body;