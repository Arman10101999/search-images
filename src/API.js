import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID eXY_pJYwjEQLnCcOYNZ3We1764xnDY_pnJ8oWv4RLCs',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;