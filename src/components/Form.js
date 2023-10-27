import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { searchGiphy, setGiphyURL, isLoading } from '../actions/giphyActions';

const Form = ({ searchGiphy, setGiphyURL, isLoading }) => {
  const getGiphy = async word => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_REQUEST_API_KEY}&tag=${word}&rating=g`);
      const giphyURL = response.data.data.images.original.url;

      setGiphyURL(giphyURL);
      isLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const word = form.elements[0]?.value;

    isLoading(true);
    getGiphy(word);
    searchGiphy(word);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Type your context:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type Context"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
}

const mapStateToProps = state => ({
  searchedGiphy: state.giphyFinder.searchedGiphy,
});

const mapDispatchToProps = {
  searchGiphy,
  setGiphyURL,
  isLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
