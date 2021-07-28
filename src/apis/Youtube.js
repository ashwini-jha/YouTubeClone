import axios from 'axios';

const KEY = 'AIzaSyB6aUXER3gH3xI-H5VbYrj1-ummn7mTNmU';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params :{
        part : 'snippet',
        type: 'video',
        maxResults : 5,
        key : KEY
    }
});