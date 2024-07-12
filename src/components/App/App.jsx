import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const API_KEY = 'RjIjm814cCi6oFDnzveXOQIjV4eTOZ8pKI0jOsA7nU8';
  const BASE_URL = 'https://api.unsplash.com/search/photos';

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });
        if (response.data.results.length === 0) {
          toast.error('No images found. Please try a different search.');
        } else {
          setImages(prevImages => [...prevImages, ...response.data.results]);
        }
      } catch (error) {
        setError('Failed to fetch images. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = searchQuery => {
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = url => {
    setLargeImageURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setLargeImageURL('');
    setShowModal(false);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && <ImageModal largeImageURL={largeImageURL} onClose={closeModal} />}
    </div>
  );
};

export default App;