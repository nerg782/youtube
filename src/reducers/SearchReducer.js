import concat from 'lodash/concat';
import {
    GET_SEARCH_RESULT
} from '../actions/SearchAction';


const initialState = {
    items: [],
};

const searchResult = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_SEARCH_RESULT:
            const currentItems = [...state.items];
            const { items, pageInfo, nextPageToken } = payload;
            return { ...state, pageInfo, nextPageToken, items: concat(currentItems, items) };
        default:
            return state;
    }
}

export default searchResult;