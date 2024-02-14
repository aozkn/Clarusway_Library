import { createContext, useState, useContext } from "react";
import axios from "axios";
//! 1- Login Context'i olusuturuldu
const BooksContext = createContext();

//! 2-Sarmalayici (Provider) Component
const BooksContextProvider = ({ children }) => {
  // //! Local State
  //   const [query, setQuery] = useState("");
  //   const [selectType, setSelectType] = useState("ALL");
  const [bookData, setBookData] = useState([]);
  const [searchInfo, setSearchInfo] = useState({
    query: "",
    selectType: "ALL",
  });
  const APP_KEY = process.env.REACT_APP_apiKey;
  //   console.log(APP_KEY);
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInfo.query}&printType=${searchInfo.selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios(URL);
      console.log(data);
      setBookData(data.items);
    } catch (error) {}
  };
  const values = { bookData, setBookData, getData, searchInfo, setSearchInfo };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

//! 3- consuming custom hook
export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksContextProvider;
