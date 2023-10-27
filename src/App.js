import React from 'react';
import Form from './components/Form';
import GiphyContainer from './components/GiphyContainer';

const App = () => {
  return (
    <div className="App flex flex-col items-center justify-center h-screen">
      <Form />
      <GiphyContainer />
    </div>
  );
};

export default App;
