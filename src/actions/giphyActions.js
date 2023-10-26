export const searchGiphy = searchedGiphy => ({
    type: 'SEARCH_GIPHY',
    payload: searchedGiphy,
});

export const isLoading = bool => ({
    type: 'IS_LOADING',
});

export const setGiphyURL = giphyURL => ({
    type: 'SET_GIPHY_URL',
    payload: giphyURL,
});