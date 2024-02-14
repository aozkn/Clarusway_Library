import React from "react";
import { useNavigate } from "react-router-dom";
import { CardButton, CardContainer, CardMedia, CardTitle } from "./Card.style";
import defaultImg from "../../assets/book.jpg";

const Card = ({ item }) => {
  const { volumeInfo } = item;
  let navigate = useNavigate();
  return (
    <CardContainer>
      <CardTitle>{volumeInfo?.title}</CardTitle>
      <CardMedia
        src={volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
        alt={volumeInfo?.title}
        title={volumeInfo?.title}
      />
      <CardButton
        onClick={() => navigate(`/detail/${item.id}`, { state: item })}
      >
        View More
      </CardButton>
    </CardContainer>
  );
};

export default Card;
