import React from 'react'
import Buttons from './Buttons'


function Header(props) {

    const { filterBtnState, setFilterBtnState, searchTerm, setSearchTerm } = props;

    console.log("searchTerm", searchTerm);

    const inputHandler = (e) => {
        setSearchTerm(e.target.value);
    }

    // https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d8cca46bbe8c9259e7a94930c88859&tags=horse&per_page=24&format=json&nojsoncallback=1

    return (
        <div className="flex flex-col">
            <h1 style={{ fontFamily: 'Lobster' }} className="text-3xl text-bold text-center">
                SnapShot
            </h1>
            <div className="flex flex-col justify-center mx-auto w-1/4 mt-12">
                <input onChange={(e) => inputHandler(e)} type="search" className="h-10 text-center" placeholder="Search" value={searchTerm} style={{ backgroundColor: '#EDEFF0' }} />
                <Buttons filterBtnState={filterBtnState} setFilterBtnState={setFilterBtnState} setSearchTerm={setSearchTerm} />
            </div>
        </div>

    )
}

export default Header