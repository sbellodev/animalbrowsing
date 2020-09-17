import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
//import fossilListEN from '../data/fossil-EN.json'
import fossilListES from '../data/fossil-ES.json'

const imageURL = {
    ResetPNG: "/icons/reset.png",
    ResetWEBP: "/icons/reset.webp",
    CheckPNG: "/icons/check.png", 
    CheckJPG: "/icons/check.jpg"
}

const FossilTableContent = ({table_content}) => {
    const row = table_content.length ? table_content.map(value =>
        (
            <ul key={value.Number}>
                {!value.First && <p><input name="checks" id={value.Name} type="checkbox" /><label htmlFor={value.Name}>{value.Name}</label></p>}
                {value.First && <p>{value.Name}</p>}
                {value.First && <li><input name="checks" id={value.First} type="checkbox" /><label htmlFor={value.First}>{value.First}</label></li>}
                {value.Second && <li><input name="checks" id={value.Second} type="checkbox" /><label htmlFor={value.Second}>{value.Second}</label></li>}
                {value.Third && <li><input name="checks" id={value.Third} type="checkbox" /><label htmlFor={value.Third}>{value.Third}</label></li>}
                {value.Fourth && <li><input name="checks" id={value.Fourth} type="checkbox" /><label htmlFor={value.Fourth}>{value.Fourth}</label></li>}
                {value.Fiveth && <li><input name="checks" id={value.Fiveth} type="checkbox" /><label htmlFor={value.Fiveth}>{value.Fiveth}</label></li>}
            </ul>
        )
     ) : emptyRow
     return row
}

const emptyRow = <ul>
                    <p>No hay na'</p>
                    <li>u_u'</li>
                </ul>

const FossilTable = () => {
    const [Result, setResult] = useState("");
    const [numFossils, setNumFossils] = useState(0);
        
    let fossilList = fossilListES
    let search_placeholder = "Buscar..."

    var allCheckboxes = document.getElementsByTagName('input')        
    var numChecks = numFossils
    console.log("numchecks : " + numChecks)
    const showCheckeds = () => {
        for(let i = 0; i< allCheckboxes.length; i++){
            if(allCheckboxes === 0) break // input-search button 
            if(localStorage.getItem(allCheckboxes[i].id)) {
                allCheckboxes[i].checked = true;
                numChecks++
            }
        }
    }
    //showCheckeds();
    //document.addEventListener("DOMContentLoaded", showCheckeds);
    
    const checking = () => {
        var checkboxes = document.querySelectorAll("input[name='checks']")
        if(checkboxes){
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener("change", function(){     
                    if(checkboxes[i].checked === false) {
                        localStorage.removeItem(checkboxes[i].id)
                        setNumFossils(numFossils - 1)
                    } else {
                        localStorage.setItem(checkboxes[i].id, "checked")
                        setNumFossils(numFossils + 1)
                    }         
                })
            }
        }
    }
    
    const sortBySearch = (table, inputSearch) => {
        let toble = table.filter((v) => {
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
            setResult(toble)
    }

    const clearBoxes = () => {
        localStorage.clear() 
        setNumFossils(0) 
        window.location.reload();
        //showCheckeds();
    }
    const fillBoxes = () => {
        var checkboxes = document.getElementsByTagName('input')
        for(let i = 1; i < checkboxes.length; i++){
            checkboxes[i].checked = true
            localStorage.setItem(checkboxes[i].id, "checked")
        }
        setNumFossils(72)
    }
    
    useEffect(() => {
        showCheckeds();
        setNumFossils(numChecks)
    },[])

    return ( 
        <FossilContainer>
            {console.log(numChecks)}
            <ButtonsContainer>
                <label htmlFor="search-fossil"></label>
                <SearchInput id={"search-fossil"} onChange={(e) => sortBySearch(fossilList, e.target.value)} placeholder={search_placeholder}/>
                <label htmlFor="reset-button"></label>
                <ResetButton onClick={() => clearBoxes()}>
                    <picture>
                        <source type="image/webp" srcSet={imageURL.ResetWEBP}/>
                        <IconImage src={imageURL.ResetPNG}  alt="Reset" />
                    </picture>
                </ResetButton>
                <FillButton onClick={() => fillBoxes()}>
                    <picture>
                        <IconImage src={imageURL.CheckJPG}  alt="Fill" />
                    </picture>
                </FillButton>
            </ButtonsContainer>
            {<p>{numFossils} de 72 partes.</p>}

            <div onClick={() => checking()}>
                <FossilTableContent table_content={Result ? Result : fossilList}/>
            </div>
        </FossilContainer>
    )
}

const FossilContainer = styled.main`
    width: 60%;
    margin: 0 auto;
    font-size: 18px;
    font-family: arial;
    font-weight: normal;
    
    p {
        font-weight: bold;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    ul {
        padding: 0;
        padding-bottom: 20px;
        border: 2px solid ghostwhite;
        box-shadow: 3px 4px ghostwhite;
        border-radius: 10px;
        padding-left: 20px;
    }
    li {
        margin-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        list-style-type: none;
    }
    label {
        padding-left: 5px;
    }
    @media screen and (max-width: 570px){
        font-size: 16px;
        li {
            margin-left: 20px;
        }
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
const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px 25px 10px 0;
  border-radius: 50%;
  box-shadow: 1px 1px #888888;
`
const FillButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px 25px 10px 0;
  border-radius: 50%;
  box-shadow: 1px 1px #888888;
`
const IconImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export { FossilTable }