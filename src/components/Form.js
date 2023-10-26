import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { searchGiphy, setGiphyURL } from '../actions/giphyActions';

const Form = ({ searchGiphy, setGiphyURL }) => {
  const getGiphy = async word => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_REQUEST_API_KEY}&q=${word}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
      const giphyURL = response.data.data[0].images.original.url;

      setGiphyURL(giphyURL);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const word = form.elements[0]?.value;

    getGiphy(word);
    searchGiphy(word);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
