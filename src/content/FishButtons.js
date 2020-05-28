import React, {useState} from 'react';
import styled from 'styled-components'
import { FishTable } from '../content/FishTable'
import fishListEN from '../data/fish-EN.json'
import fishListES from '../data/fish-ES.json'
  
const imageURL = {
  Price: "/icons/star.svg",
  Hour: "/icons/hour.svg",
  ABCWEBP: "/icons/abc.webp",
  ABCPNG: "/icons/abc.png",
  ResetWEBP: "/icons/reset.webp",
  ResetPNG: "/icons/reset.png",
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
    if(localStorage.getItem("language") === "es"){
      document.title = 'Animal Browsing - Lista de peces';
      search_placeholder = "Buscar..."
      actualTable = fishListES 
    }
    else {
      document.title = 'Animal Browsing - Fish list';
      search_placeholder = "Find..."
      actualTable = fishListEN 
    }
    return (    
      <main>
        <ButtonsContainer>
          <label htmlFor="table-search"></label>
          <SearchInput  id={"table-search"} onChange={setInput} placeholder={search_placeholder} />
          <Button onClick={() => setSortBy("Hour")}><IconImage src={imageURL.Hour} alt="Hour" /></Button>
          <Button onClick={() => setSortBy("ABC")}>
            <picture>
              <source srcSet={imageURL.ABCWEBP}/>
              <source srcSet={imageURL.ABCPNG}/>
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
              <source srcSet={imageURL.ResetWEBP}/>
              <source srcSet={imageURL.ResetPNG}/>
              <IconImage src={imageURL.ResetPNG}  alt="Reset" />
            </picture>
          </ResetButton>
        </ButtonsContainer>
        <FishTable sortBy={sortBy} actualTable={actualTable} inputSearch={inputSearch} />
      </main>
    )
} 
const ButtonsContainer = styled.div`
  background-color: #CCE1F2;
  display: flex;
  flex-direction: row;
  align-items: center;
  float:right;
  padding-top: 30px;
  padding-bottom: 20px;
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

export { FishButtons } 