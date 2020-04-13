import React from 'react';
import styled from 'styled-components'

const imageURL = {
    Price: "/img/icons/price1.jpg", 
    ABC: "/img/icons/abc.png", 
    Search: "/img/icons/search1.jpg", 
    Reset: "/img/icons/reset1.png", 
    Return: "/img/icons/return1.png"
}
  
const TableButtons = () => {
    return (    
        <Ellipsis>
            <SearchButton onClick={() => console.log("Buttone Search pulsao")}><SearchImage src={imageURL.Search}  alt="Search" /></SearchButton>
            <ABCButton onClick={() => console.log("Buttone ABC pulsao")}><ABCImage src={imageURL.ABC}  alt="ABC" /></ABCButton>
            <PriceButton onClick={() => console.log("Buttone Price pulsao")}><PriceImage src={imageURL.Price}  alt="price" /></PriceButton>
            <ResetButton onClick={() => console.log("Buttone Reset pulsao")}><ResetImage src={imageURL.Reset}  alt="Reset" /></ResetButton>
        </Ellipsis>
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
const SearchButton = styled.button`
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
const SearchImage = styled.img`
  width: 30px;
`
const ResetImage = styled.img`
  width: 100%;
`
export { TableButtons }