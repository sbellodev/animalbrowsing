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
    const [searchResult, setSearchResult] = useState("");
    let fossilList = {}
    let search_placeholder = "Si..."
    if(localStorage.getItem("language") === "es") {
        fossilList = fossilListES
    }
    else {
        fossilList = fossilListEN
    }

    useEffect(() => {
        
        
       // setSearchResult(sortBySearch(fossilList, inputSearch))
        // callServerAPI()
        // const intervalId = setInterval(callServerAPI, 20000)
        // return () => clearInterval(intervalId)
    }, [fossilList, inputSearch])  

    const sortBySearch = (table, inputSearch) => 
        table.filter((v, i, a) => {
            console.log(inputSearch)
            inputSearch = inputSearch.toLowerCase()
            return (
                v.Name.toLowerCase().match(inputSearch) 
            )
        })
    

    const setInput = (e) => {
      e.preventDefault()
      setInputSearch(e.target.value)
      fossilList = sortBySearch(fossilList, inputSearch)
      console.log(fossilList)
    }


    return ( 
        
        <FossilContainer>
            <label htmlFor="search-fossil"></label>
                <input id={"search-fossil"} onChange={setInput} />
            <FossilTableContent table_content={fossilList}/>
        </FossilContainer> 
    )
}

const FossilContainer = styled.main`
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
        padding-bottom: 20px;
    }
    li {
        margin-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 570px) {
        font-size: 16px;
        li {
            margin-left: 20px;
        }
    }
    @media screen and (max-width: 340px) {
        font-size: 14px;
    }
`
export { FossilTable }