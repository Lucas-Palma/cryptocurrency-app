import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '359c84ef9cmsh709cfc8a3c7a9aap1d8f1fjsn6e4b257b1c75',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
