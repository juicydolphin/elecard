import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: 'http://contest.elecard.ru/frontend_data/'}),
    endpoints: build => ({
        getData: build.query({
            query: () => `catalog.json`
        })
    })

})

export const {useGetDataQuery} = api