import React, { useState } from 'react';
import Header from './components/Header';
import Images from './components/Images';

function App() {

  const [filterBtnState, setFilterBtnState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-20 mx-auto">
      <Header filterBtnState={filterBtnState} setFilterBtnState={setFilterBtnState} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Images filterBtnState={filterBtnState} searchTerm={searchTerm} setFilterBtnState={setFilterBtnState} />
    </div>
  );
}

export default App;
