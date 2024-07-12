import axios from 'axios';

const myApiKey = '8oNwi0OXqhtc_VusPDYLuJtezcuprtzlaHWsvb61_YA';
axios.defaults.headers.common['Authorization'] = `Client-ID ${myApiKey}`;
axios.defaults.baseURL = 'https://api.unsplash.com/search';

export const fetchImages = async (searchReq) => {
	const response = await axios.get(`/photos?page=1&query=${searchReq}`);
	return response.data.results;

};