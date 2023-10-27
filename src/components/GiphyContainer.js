import React, { useState } from 'react';
import { connect } from 'react-redux';
import loading from '../assets/loading.webp';

const GiphyContainer = ({ searchedGiphy, giphyURL, isLoading }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        const urlToCopy = giphyURL;
        const textArea = document.createElement("textarea");

        document.body.appendChild(textArea);
        textArea.value = urlToCopy;
        textArea.select();

        document.execCommand("copy");
        document.body.removeChild(textArea);

        setCopySuccess(true);

        setTimeout(() => {
            setCopySuccess(false);
        }, 5000);
    };

    return (
        <div className='border flex mx-auto max-w-md p-6 bg-white rounded-md shadow-md w-full items-center justify-center flex-col'>
            {isLoading ? (
                <img src={loading} className='items-center justify-center' alt='loading' />
            ) : (
                searchedGiphy ? (
                    <>
                        <img src={giphyURL} className='items-center justify-center' alt={searchedGiphy} />
                        <button
                            type="button"
                            onClick={copyToClipboard}
                            className="w-full bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            {copySuccess ? 'Copied URL!' : 'Copy Giphy URL'}
                        </button>
                    </>
                ) : (
                    <p className='text-center'>Search for a Giphy</p>
                )
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    searchedGiphy: state.giphyFinder.searchedGiphy,
    giphyURL: state.giphyFinder.giphyURL,
    isLoading: state.giphyFinder.isLoading,
});

export default connect(mapStateToProps)(GiphyContainer);
