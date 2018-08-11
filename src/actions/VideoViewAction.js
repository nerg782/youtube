import axios from 'axios';
import queryString from 'query-string'

const urlBase = 'https://www.googleapis.com/youtube/v3/commentThreads';



export const GET_VIDEO_COMMENTS = 'GET_VIDEO_COMMENTS';

export const getComments = (videoId,pageToken) => async (dispatch) => {
    const query = {
    part: 'snippet',
    videoId: videoId,
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
        dispatch({ type:GET_VIDEO_COMMENTS, payload: { items, pageInfo, nextPageToken } });
    } catch (error) {
        console.log('getComments:', error);
    }
};