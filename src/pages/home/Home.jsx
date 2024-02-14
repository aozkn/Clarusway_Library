import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import HomeImg from "../../assets/books.jpg";
import { useBooksContext } from "../../context/BooksContext";

const Home = () => {
  const { bookData } = useBooksContext();
  return (
    <HomeContainer>
      <Header />
      {bookData.length ? (
        <CardContainer wrap="wrap">
          {bookData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <HomeImage>
          <img src={HomeImg} alt="books" />
        </HomeImage>
      )}
    </HomeContainer>
  );
};

export default Home;
