import React, {useState} from 'react';
import styled from 'styled-components'
import { Table } from '../content/Table'
import bugJSON from '../data/bug-EN.json'
import fishJSON from '../data/fish-EN.json'
  
const imageURL = {
    Price: "/img/icons/price1.jpg", 
    ABC: "/img/icons/abc.png", 
    Search: "/img/icons/search1.jpg", 
    Reset: "/img/icons/reset1.png", 
    Return: "/img/icons/return1.png"
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
            <Ellipsis>
                <SearchInput onChange={setInput} />
                <ABCButton onClick={() => setSortBy("ABC")}><ABCImage src={imageURL.ABC}  alt="ABC" /></ABCButton>
                <PriceButton onClick={() => setSortBy("Price")}><PriceImage src={imageURL.Price}  alt="price" /></PriceButton>
                <ResetButton onClick={() => setSortBy("Reset")}><ResetImage src={imageURL.Reset}  alt="Reset" /></ResetButton>
            </Ellipsis>
            <Table actualIndex={actualIndex} sortBy={sortBy} actualTable={actualTable} inputSearch={inputSearch} />
        </>
    )
} 

const Ellipsis = styled.div`
  width: 100%;
  height: 90px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #A0D0E7;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const SearchInput = styled.input`
  width: 100px;
  height: 40px;
  margin-top: 45px;
  border-radius: 30px;
  img {
    float: right;
  }
`
const ABCButton = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 45px;
  border-radius: 10px;
`
const PriceButton = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 45px;
  border-radius: 10px;
`
const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  margin-top: 45px;
  border-radius: 50%;
`
const PriceImage = styled.img`
  width: 100%;
`
const ABCImage = styled.img`
  width: 100%;
`
// const SearchImage = styled.img`
//   width: 30px;
//   height: 30px;
// `
const ResetImage = styled.img`
  width: 100%;
`

export { TableButtons } 