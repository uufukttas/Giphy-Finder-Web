import React from 'react';
import { connect } from 'react-redux';

const GiphyContainer = ({ searchedGiphy, giphyURL }) => {
    return (
        <div className='border flex mx-auto max-w-md p-6 bg-white rounded-md shadow-md w-full'>
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