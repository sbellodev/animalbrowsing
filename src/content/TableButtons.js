import React, {useState} from 'react';
import styled from 'styled-components'
import { Table } from '../content/Table'
import bugJSON from '../data/bug-EN.json'
import fishJSON from '../data/fish-EN.json'
  
const imageURL = {
    Price: "/img/icons/star.svg", 
    ABC: "/img/icons/abc.png", 
    Search: "/img/icons/search1.jpg", 
    Reset: "/img/icons/reset1.png", 
    Return: "/img/icons/return1.png", 
}

const TableButtons = ({actualIndex}) => {
    const [sortBy, setSortBy] = useState("");
    const [inputSearch, setInputSearch] = useState("")

    const setInput = (e) => {
      e.preventDefault()
        setSortBy("Search")
        setInputSearch(e.target.value)
    }
    const actualTable = actualIndex === "Bugs" ? bugJSON :
                        actualIndex === "Fish" ? fishJSON : ""
    return (    
        <>
            <ButtonsContainer>
              <SearchInput onChange={setInput} placeholder={" Search"} />
              <ABCButton onClick={() => setSortBy("ABC")}><ABCImage src={imageURL.ABC}  alt="ABC" /></ABCButton>
              <PriceButton onClick={() => setSortBy("Price")}><PriceImage src={imageURL.Price}  alt="price" /></PriceButton>
              <ResetButton onClick={() => setSortBy("Reset")}><ResetImage src={imageURL.Reset}  alt="Reset" /></ResetButton>
            </ButtonsContainer>    
            <Table actualIndex={actualIndex} sortBy={sortBy} actualTable={actualTable} inputSearch={inputSearch} />
        </>
    )
} 

const ButtonsContainer = styled.div`
  background-color: #A0D0E7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

`
const SearchInput = styled.input`
  font-size: 12px;
  width: 80px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 25px;
  img {
    float: right;
  }
`
const ABCButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 10px;
`
const PriceButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 10px;
  background-color: #FDDD5C;
`
const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px 25px 10px 0;
  border-radius: 50%;
`
const PriceImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`
const ABCImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`
// const SearchImage = styled.img`
//   width: 30px;
//   height: 30px;
// `
const ResetImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`

export { TableButtons } 