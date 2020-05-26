import React, {useState} from 'react';
import styled from 'styled-components'
import { BugsTable } from '../content/BugsTable'
import bugListEN from '../data/bug-EN.json'
import bugListES from '../data/bug-ES.json'
  
const imageURL = {
  Price: "/img/icons/star.svg",
  Hour: "/img/icons/hour.svg",
  ABCWEBP: "/img/icons/abc.webp",
  ABCPNG: "/img/icons/abc.png",
  ResetWEBP: "/img/icons/reset.webp",
  ResetPNG: "/img/icons/reset.png",
}

const BugsButtons = () => {
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
      document.title = 'Animal Browsing - Lista de bichos';
      search_placeholder = "Buscar..."
      actualTable = bugListES 
    }
    else {
      document.title = 'Animal Browsing - Bug list';
      search_placeholder = "Find..."
      actualTable = bugListEN 
    }
    return (    
      <>
        <ButtonsContainer>
          <label for="table-search"></label>
          <SearchInput  id={"table-search"} onChange={setInput} placeholder={search_placeholder} />
          <Button onClick={() => setSortBy("Hour")}><IconImage src={imageURL.Hour} alt="Hour" /></Button>
          <Button onClick={() => setSortBy("ABC")}>
            <picture>
              <sources srcSet={imageURL.ABCWEBP}/>
              <sources srcSet={imageURL.ABCPNG}/>
              <IconImage src={imageURL.ABCPNG} alt="ABC" />
            </picture>
          </Button>
          <Button onClick={() => setSortBy("Price")} style={{backgroundColor: "#FDDD5C"}}>
            <picture>
                <IconImage src={imageURL.Price}  alt="price" />
            </picture>
          </Button>
          <ResetButton onClick={() => setSortBy("Reset")}>
            <picture>
              <sources srcSet={imageURL.ResetWEBP}/>
              <sources srcSet={imageURL.ResetPNG}/>
              <IconImage src={imageURL.ResetPNG}  alt="Reset" />
            </picture>
          </ResetButton>
        </ButtonsContainer>
        <BugsTable sortBy={sortBy} actualTable={actualTable} inputSearch={inputSearch} />
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
  button {
    background-color: ghostwhite;
  }
`
const SearchInput = styled.input`
  font-size: 12px;
  width: 80px;
  height: 35px;
  margin-right: 20px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid white;
  box-shadow: 1px 1px black;

  img {
    float: right;
  }

  @media screen and (max-width: 340px){
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
  @media screen and (max-width: 340px){
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

export { BugsButtons } 