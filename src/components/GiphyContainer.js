import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux';

const GiphyContainer = ({ searchedGiphy, searchGiphy }) => {
    const [giphy, setGiphy] = React.useState({})
    const getGiphy = () => {
        // Make a request for a user with a given ID
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_REQUEST_API_KEY}&q=${searchedGiphy}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                setGiphy(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }
    return (
        <>
            <div>GiphyContainer</div>
            <input type="button" value="Search" onClick={getGiphy} />
            {console.log('giphy', giphy[0]?.images?.original?.url)}
            <img src={giphy[0]?.images?.original?.url} />
        </>
    )
}

const mapStateToProps = (state) => ({
    searchedGiphy: state.giphyFinder.searchedGiphy,
});



export default connect(mapStateToProps)(GiphyContainer);