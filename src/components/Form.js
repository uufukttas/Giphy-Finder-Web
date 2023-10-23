import React from 'react'
import { connect } from 'react-redux';
import { searchGiphy } from '../actions/giphyActions';

const Form = ({ searchGiphy }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const word = form.elements[0].value;
    searchGiphy(word);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type your word' />
      <input type="submit" value="Search" />
      <p className='text-3xl font-bold underline'>TEST</p>
    </form>
  )
}

const mapStateToProps = (state) => ({
  searchedGiphy: state.giphyFinder.searchedGiphy,
});

const mapDispatchToProps = {
  searchGiphy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
