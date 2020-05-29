import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import fossilListEN from '../data/fossil-EN.json'
import fossilListES from '../data/fossil-ES.json'

const FossilTableContent = ({table_content}) => {
    const row = table_content.length ? table_content.map(value =>
         <ul key={value.Number}>
            <p>{value.Name}</p>
            {value.First && <li>{value.First}</li>}
            {value.Second && <li>{value.Second}</li>}
            {value.Third && <li>{value.Third}</li>}
            {value.Fourth && <li>{value.Fourth}</li>}
            {value.Fiveth && <li>{value.Fiveth}</li>}
         </ul>
     ) : emptyRow
     return row
}

const emptyRow = <ul>
                    <p>Empty</p>
                    <li>u_u'</li>
                </ul>

const FossilTable = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [Result, setResult] = useState(inputSearch);

    let search_placeholder = "Search..."
    let fossilList = {}
    if(localStorage.getItem("language") === "es"){
        fossilList = fossilListES
        search_placeholder = "Buscar..."
    }
    else {
        fossilList = fossilListEN
    }

    useEffect(() => {
        setResult(sortBySearch(fossilList, inputSearch))
    }, [fossilList, inputSearch])  

    const sortBySearch = (table, inputSearch) => 
        table.filter((v) => {
            inputSearch = inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            return (
                v.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
                (v.First && v.First.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) )||
                (v.Second && v.Second.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) )||
                (v.Third && v.Third.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) )||
                (v.Fourth && v.Fourth.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) )||
                (v.Fiveth && v.Fiveth.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) )||
                (v.Sixth && v.Sixth.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch)) 
            )
        })
    
    return ( 
        <FossilContainer>
           <ButtonsContainer>
                <label htmlFor="search-fossil"></label>
                <SearchInput id={"search-fossil"} onChange={(e) => setInputSearch(e.target.value)} placeholder={search_placeholder}/>
           </ButtonsContainer>
            <FossilTableContainer>
                <FossilTableContent table_content={Result ? Result : fossilList}/>
            </FossilTableContainer>
        </FossilContainer>
    )
}

const FossilContainer = styled.div`
    font-size: 18px;
    font-family: arial;
    font-weight: normal;
    padding-left: 30px;
    
    p {
        padding-bottom: 10px;
        font-weight: bold;
    }
    ul {
        
        padding-left: 0px;
        padding-top: 20px;
        
    }
    li {
        margin-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 570px){
        font-size: 16px;
        li {
            margin-left: 20px;
        }
    }
    @media screen and (max-width: 340px){
        font-size: 14px;
    }
`
const ButtonsContainer = styled.div`
    background-color: #CCE1F2;
    display: flex;
    flex-direction: row;
    align-items: center;
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

    @media screen and (max-width: 340px){
    width: 60px;
    height: 25px;
    margin-right: 10px;
    }
`

const FossilTableContainer = styled.div``
export { FossilTable }