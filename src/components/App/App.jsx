import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImages } from '../ImageCard-api';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     async function getArticles() {
  //       try {
  //         setLoading(true);
  //         const data = await fetchImages('cup');
  //         console.log(data);
  //         setArticles(data);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     getArticles();
  //   }, []);

  const handleSearch = async newReq => {
    try {
      setLoading(true);
      setArticles([]);
      setError(false);
      const data = await fetchImages(newReq);
      setArticles(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>HTTP requests in React</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading Images, please wait...</p>}
      {error && <p>Ooopppsss` some error ...</p>}
      {articles.length > 0 && <ImageGallery items={articles} />}
    </div>
  );
}
