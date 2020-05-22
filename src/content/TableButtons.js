import React, {useState} from 'react';
import styled from 'styled-components'
import { Table } from '../content/Table'
import bugJSON from '../data/bug-ES.json'
import fishJSON from '../data/fish-ES.json'
// import bugList-EN from '../data/bug-EN.json'
// import fishList-EN from '../data/fish-EN.json'
// import bugList-ES from '../data/bug-ES.json'
// import fishList-ES from '../data/fish-ES.json'
  
const imageURL = {
    Price: "/img/icons/star.svg",
    Hour: "/img/icons/hour.svg", 
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
              <SearchInput onChange={setInput} placeholder={"Name"} />
              <HourButton onClick={() => setSortBy("Hour")}><IconImage src={imageURL.Hour} alt="Hour" /></HourButton>
              <ABCButton onClick={() => setSortBy("ABC")}><IconImage src={imageURL.ABC}  alt="ABC" /></ABCButton>
              <PriceButton onClick={() => setSortBy("Price")}><IconImage src={imageURL.Price}  alt="price" /></PriceButton>
              <ResetButton onClick={() => setSortBy("Reset")}><IconImage src={imageURL.Reset}  alt="Reset" /></ResetButton>
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
float:right;
padding-bottom: 18px;
`
const SearchInput = styled.input`
font-size: 12px;
width: 80px;
height: 35px;
margin: 10px 25px 10px 0;
border-radius: 25px;
padding-left: 10px;
img {
  float: right;
}
`
const HourButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 10px 25px 10px 0;
  border-radius: 10px;
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
const IconImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`

export { TableButtons } 