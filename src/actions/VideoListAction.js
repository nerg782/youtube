import axios from 'axios';
import queryString from 'query-string'

const urlBase = 'https://www.googleapis.com/youtube/v3/videos';

const query = {
    part: 'snippet',
    chart: 'mostPopular',
    key: 'AIzaSyBrph29zfBigS-DYyvG4VYibZmLzkboov0',
    maxResults: 20,
};

export const GET_VIDEOS = 'GET_VIDEOS';

export const getAllVideos = (pageToken) => async (dispatch) => {
    try {
        let response = {};
        if(!pageToken){
            console.log('Here', `${urlBase}?${queryString.stringify(query)}`);
            response = await axios.get(`${urlBase}?${queryString.stringify(query)}`);
        }else{
            console.log('Here', `${urlBase}?${queryString.stringify({ ...query, pageToken })}`);
            response = await axios.get(`${urlBase}?${queryString.stringify({ ...query, pageToken })}`);
        }
        const { items, pageInfo, nextPageToken } = response.data;
        dispatch({ type:GET_VIDEOS, payload: { items, pageInfo, nextPageToken } });
    } catch (error) {
        console.log('getAllVideos:', error);
    }
};