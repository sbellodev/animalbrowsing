import React, {useState} from 'react';
import styled from 'styled-components'
import { FishTable } from '../content/FishTable'
import fishListEN from '../data/fish-EN.json'
import fishListES from '../data/fish-ES.json'
//import { useLocation} from "react-router";
  
const imageURL = {
    Price: "/img/icons/star.svg",
    Hour: "/img/icons/hour.svg", 
    ABC: "/img/icons/abc.png", 
    Search: "/img/icons/search1.jpg", 
    Reset: "/img/icons/reset1.png", 
    Return: "/img/icons/return1.png", 
}

const FishButtons = () => {
    const [sortBy, setSortBy] = useState("");
    const [inputSearch, setInputSearch] = useState("")

    const setInput = (e) => {
      e.preventDefault()
        setSortBy("Search")
        setInputSearch(e.target.value)
    }

    let search_placeholder = ""
    let actualTable = ""
    if(localStorage.getItem("language") === "es") {
      search_placeholder = "Buscas..."
      actualTable = fishListES 
      document.title = 'Lista de peces - Animal Browsing';
    }
    else {
      search_placeholder = "Find..."
      actualTable = fishListEN 
      document.title = 'Fish list - Animal Browsing';
    }
    return (    
      <>
        <ButtonsContainer>
          <SearchInput onChange={setInput} placeholder={search_placeholder} />
          <HourButton onClick={() => setSortBy("Hour")}><IconImage src={imageURL.Hour} alt="Hour" /></HourButton>
          <ABCButton onClick={() => setSortBy("ABC")}><IconImage src={imageURL.ABC}  alt="ABC" /></ABCButton>
          <PriceButton onClick={() => setSortBy("Price")}><IconImage src={imageURL.Price}  alt="price" /></PriceButton>
          <ResetButton onClick={() => setSortBy("Reset")}><IconImage src={imageURL.Reset}  alt="Reset" /></ResetButton>
        </ButtonsContainer>    
        <FishTable sortBy={sortBy} actualTable={actualTable} inputSearch={inputSearch} />
      </>
    )
} 
const ButtonsContainer = styled.div`
background-color: #A0D0E7;
display: flex;
flex-direction: row;
align-items: center;
float:right;
padding-bottom: 18px;
`
const SearchInput = styled.input`
  font-size: 14px;
  width: 80px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 25px;
  padding-left: 10px;
  border: 1px solid white;
  box-shadow: 1px 1px black;

  img {
    float: right;
  }
`
const HourButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
`
const ABCButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
`
const PriceButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 10px;
  background-color: #FDDD5C;
  box-shadow: 1px 1px #888888;
`
const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px 25px 10px 0;
  border-radius: 50%;
  box-shadow: 1px 1px #888888;
`
const IconImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`

export { FishButtons } 