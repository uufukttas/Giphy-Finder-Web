const initialState = {
    searchedGiphy: '',
    isLoading: false,
}

const giphyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_GIPHY':
            return {
                ...state,
                searchedGiphy: action.payload,
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        default:
            return state;
    }
}

export default giphyReducer;