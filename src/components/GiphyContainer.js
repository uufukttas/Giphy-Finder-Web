import React from 'react';
import { connect } from 'react-redux';

const GiphyContainer = ({ searchedGiphy, giphyURL }) => {
    return (
        <div className='border flex w-1/2 mx-auto'>
            {searchedGiphy !== '' ? (
                <img src={giphyURL} className='items-center justify-center' alt={searchedGiphy} />
            ) : (
                <p>Search for a Giphy</p>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    searchedGiphy: state.giphyFinder.searchedGiphy,
    giphyURL: state.giphyFinder.giphyURL,
});

export default connect(mapStateToProps)(GiphyContainer);