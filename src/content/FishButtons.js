import React, {useState} from 'react';
import styled from 'styled-components'
import { FishTable } from '../content/FishTable'
import fishListEN from '../data/fish-EN.json'
import fishListES from '../data/fish-ES.json'
  
const imageURL = {
    Price: "/img/icons/star.svg",
    Hour: "/img/icons/hour.svg", 
    ABC: "/img/icons/abc.webp", 
    Search: "/img/icons/search.webp", 
    Reset: "/img/icons/reset.webp", 
    Return: "/img/icons/return.webp", 
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
      search_placeholder = "Buscar..."
      actualTable = fishListES 
      document.title = 'Animal Browsing - Lista de peces';
    }
    else {
      search_placeholder = "Find..."
      actualTable = fishListEN 
      document.title = 'Animal Browsing - Fish list';
    }
    return (    
      <>
        <ButtonsContainer>
          <SearchInput  onChange={setInput} placeholder={search_placeholder} />
          <Button onClick={() => setSortBy("Hour")}><IconImage src={imageURL.Hour} alt="Hour" /></Button>
          <Button onClick={() => setSortBy("ABC")}><IconImage src={imageURL.ABC}  alt="ABC" /></Button>
          <Button onClick={() => setSortBy("Price")} style={{backgroundColor: "#FDDD5C"}}><IconImage src={imageURL.Price}  alt="price" /></Button>
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
  font-size: 12px;
  width: 80px;
  height: 35px;
  margin-right: 20px;
  border-radius: 25px;
  padding-left: 10px;
  border: 1px solid white;
  box-shadow: 1px 1px black;

  img {
    float: right;
  }

  @media (max-width: 340px){
    width: 60px;
    height: 25px;
    margin-right: 10px;
  }
`
const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  box-shadow: 1px 1px #888888;
  margin-right: 20px;
  @media (max-width: 340px){
    margin-right: 10px;
  }
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