import axios from 'axios';
import queryString from 'query-string';
// import {getParameterByName} from '../helpers/helpers';

const urlBase = 'https://www.googleapis.com/youtube/v3/search';

// let searchQuery = getParameterByName('whitzack')

export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';

export const getSearchResult = (query,pageToken) => async (dispatch) => {
    console.log('aqui');
    
    console.log(query);
    
    const query = {
        part: 'snippet',
        q: query,
        key: 'AIzaSyBrph29zfBigS-DYyvG4VYibZmLzkboov0',
        maxResults: 20,
    };

    try {
        let response = {};
        if(!pageToken){
            response = await axios.get(`${urlBase}?${queryString.stringify(query)}`);
        }else{
            response = await axios.get(`${urlBase}?${queryString.stringify({ ...query, pageToken })}`);
        }
        const { items, pageInfo, nextPageToken } = response.data;
        dispatch({ type:GET_SEARCH_RESULT, payload: { items, pageInfo, nextPageToken } });
    } catch (error) {
        console.log('getSearchResult:', error);
    }
};