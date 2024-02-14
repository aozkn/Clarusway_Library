import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";
import { useBooksContext } from "../../context/BooksContext";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { searchInfo, setSearchInfo, getData } = useBooksContext();

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log({ [e.target.name]: e.target.value });
    setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value }); //inputun name attr ile statedeki key name should be same
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  // console.log(searchInfo);
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZINES</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          placeholder="Search..."
          name="query"
          value={searchInfo.queary}
          onChange={handleChange}
          required
        />
        <SelectBox
          value={searchInfo.selectType}
          onChange={handleChange}
          name="selectType"
          required
        >
          {/* <option>All</option>
          <option>BOOKS</option>
          <option>MAGAZINES</option> */}

          {printType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
