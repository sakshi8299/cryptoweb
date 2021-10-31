import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
     'x-rapidapi-key': '[api-key]'
}
const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    })
  })
});

export const {
     useGetCryptosQuery,  useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
     } = cryptoApi;

