import { useState } from 'react'
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal"

function App() => {
  <>  
    <LoadMoreBtn />
    <SearchBar />
    <ImageGallery />
    <Loader />
    <ErrorMessage />
    <ImageModal/>
  </>
}
export default App
