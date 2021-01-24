import React from 'react';

//components
import BookList from './components/BookList';


const App = () => {
    return (
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList/>
      </div>
    );
}

export default App;