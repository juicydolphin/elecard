import React from 'react';
import s from './body.module.css'
import Grid from "./Grid/Grid";
import {useGetDataQuery} from "../../store/api/api";
import Preloader from "../Common/Preloader/Preloader";

const Body = () => {


    const {data, error, isLoading} = useGetDataQuery()


    return (
        <div className={s.container}>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Preloader/>
            ) : data ? (
                <Grid data={data}/>
            ) : null}
        </div>
    );
};

export default Body;