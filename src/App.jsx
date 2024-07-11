import { useEffect, useState } from 'react';
import axios from 'axios';

const myApiKey = '8oNwi0OXqhtc_VusPDYLuJtezcuprtzlaHWsvb61_YA';
axios.defaults.headers.common['Authorization'] = `Client-ID ${myApiKey}`;
axios.defaults.baseURL = 'https://api.unsplash.com/search';

export default function App() {
  useEffect(() => {
    async function getArticles() {
      const response = await axios.get('/photos?page=1&query=office');

      console.log(response);
    }

    getArticles();
  }, []);

  return (
    <div>
      <h1>HTTP requests in React</h1>
    </div>
  );
}
