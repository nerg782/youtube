import concat from 'lodash/concat';
import {
    GET_VIDEO_COMMENTS
} from '../actions/VideoListAction';


const initialState = {
    items: [],
};

const comments = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_VIDEO_COMMENTS:
            const currentItems = [...state.items];
            const { items, pageInfo, nextPageToken } = payload;
            console.log({ items, pageInfo, nextPageToken });
            return { ...state, pageInfo, nextPageToken, items: concat(currentItems, items) };
        default:
            return state;
    }
}

export default comments;