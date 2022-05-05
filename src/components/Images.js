import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Images(props) {

    const { filterBtnState, searchTerm } = props;
    const { textForApiCall, setTextForApiCall } = props;

    const [photos, setPhotos] = useState([]);

    const yourApiKey = '78d8cca46bbe8c9259e7a94930c88859';

    const data = {
        method: 'flickr.photos.search',
        api_key: yourApiKey,
        text: searchTerm || filterBtnState, // Search Text
        sort: 'interestingness-desc',
        per_page: 12,
        license: '4',
        extras: 'owner_name,license',
        format: 'json',
        nojsoncallback: 1,
    };

    console.log("searchTerm", searchTerm);
    console.log("filterBtnState", filterBtnState);

    const parameters = new URLSearchParams(data);

    const url = `https://api.flickr.com/services/rest/?${parameters}`;

    useEffect(() => {
        axios.get(url)
            .then(response => response)
            .then(data => (
                setPhotos(data)
            )).catch(error => console.log(error.message))
    }, [filterBtnState, searchTerm]);

    console.log("photos", photos?.data?.photos);

    return (
        <div className="flex flex-col justify-center mx-auto w-1/2 mt-20">
            <div className="grid grid-cols-4 gap-12">
                {photos?.data?.photos?.photo.map(photo => (
                    <img key={photo.id} style={{ width: '200px' }} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} />
                ))}
            </div>
        </div>
    )
}

export default Images