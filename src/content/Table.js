import React, {useState} from 'react';
import styled from 'styled-components'
import bugJSON from '../data/bug-EN.json'
import fishJSON from '../data/fish-EN.json'

const imageURL = {
    Price: "/img/icons/price1.jpg", 
    ABC: "/img/icons/abc.png", 
    Search: "/img/icons/search1.jpg", 
    Reset: "/img/icons/reset1.png", 
    Return: "/img/icons/return1.png"
}

// simple search 
// https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg
const SearchEngine = ({actualIndex}) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    
    const people = ["A", "B", "C"]
    React.useEffect(() => {
        const results = people.filter(person =>
          person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);

      return (
        <>
            <SearchInput type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
            {/* <ul>
                {searchResults.map(item => (
                <li>{item}</li>
                ))}
            </ul> */}
        </>
      )

}
const TableButtons = ({actualIndex}) => {
    const [sortBy, setSortBy] = useState("");
    const [inputSearch, setInputSearch] = useState("")

    const setInput = (e) => {
        setSortBy("Search")
        e.preventDefault();
        setInputSearch(e.target.value)
        console.log(e.target.value)
    }
    // Search Image
    // <SearchImage src={imageURL.Search}  alt="Search" />
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
const SearchImage = styled.img`
  width: 30px;
`
const ResetImage = styled.img`
  width: 100%;
`
// const BugDesktopTable = () => {
//    const row = bugJSON.map(value =>
//         <tr key={value.Number}>
//             <td><img src={"../img/bug/" +value.Image} alt="sudando" /></td>
//             <td>{value.Name}</td>
//             <td>{value.Price}</td>
//             <td>{value.Time}</td>
//             <td>{value.Season}</td>
//             <td>{value.Location}</td>
//         </tr>
//     )
//     return (
//         {row}
//     )
// }



//sortByPrice(fishJSON)
const BugMobileTable = () => {
    const row = bugJSON.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/bug/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name} <br/> {value.Price}</td>
            <td>{value.Time} <br/> {value.Location}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     )
     return row
}
const FishMobileTable = () => {
    const row = fishJSON.map(value =>
         <tr key={value.Number}>
            <td><img src={"../img/fish/" + value.Image} alt={value.Name} /></td>
            <td>{value.Name}<br/>{value.Price}</td>
            <td>{value.Time}<br/>{value.Location}<br/>{value.Size}</td>
            <td dangerouslySetInnerHTML={{ __html: value.Season}}></td>
         </tr>
     )
     return row
}
// const FishDesktopTable = () => {
    
//     const row = fishJSON.map(value =>
//          <tr key={value.Number}>
//              <td><img src={"../img/fish/" +value.Image} alt="sudando" /></td>
//              <td>{value.Name}</td>
//              <td>{value.Price}</td>
//              <td>{value.Time}</td>
//              <td>{value.Season}</td>
//              <td>{value.Location}</td>
//          </tr>
//      )
//      return row
//  }

const Table = ({actualIndex, sortBy, actualTable, inputSearch}) => {
    
    if(sortBy) {
        const sortBySearch = (table, inputSearch) => table.map((v, i, a) => 
                                        console.log(v.Image.match(inputSearch.toLowerCase()) ? v : ""))
        const sortByPrice = (table) => table.sort((a, b) => b.PriceInt - a.PriceInt)
        const sortByABC = (table) => table.sort((a, b) => 
                                        a.Name > b.Name ? 1 :
                                        a.Name < b.Name ? -1 : 0)
        const sortByReset = (table) => table.sort((a, b) => a.Number - b.Number)

        switch (sortBy) {
            case "Search":
                sortBySearch(actualTable, inputSearch)
                break
            case "Price":
                sortByPrice(actualTable)
                break
            case "ABC":
                sortByABC(actualTable)
                break
            case "Reset":
                sortByReset(actualTable)
                break
            default:
                console.log("Error on table's buttons")
        }
    }
      
    switch(actualIndex) {
        case "Bugs":
            return (         
                <TableContainer>
                    <thead>            
                        <tr>
                            <th>Image</th>
                            <th>Name<br/>Price</th>
                            <th>Time<br/>Location</th>
                            <th>Season<br/>(Hemi.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BugMobileTable />
                    </tbody>
                </TableContainer>
            )
        case "Fish":
            return (
                <TableContainer>
                    <thead>            
                        <tr>
                            <th>Image</th>
                            <th>Name<br/>Price</th>
                            <th>Time<br/>Location<br/>Size</th>
                            <th>Season<br/>(Hemi.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FishMobileTable />
                    </tbody>
                </TableContainer>
            )          
        default: 
                return <div>Error. Table not rendered.</div>
    }
}


const TableContainer = styled.table`
    background-color: #F5F2E3;
    text-align: left;
    border-collapse: collapse;
    padding: 5px;
    max-width: 800px;

    td {
        text-align: left;
    }
    tr {
        background-color: #F5F2E3;
        border-bottom: 16px solid #A0D0E7;
        border-top: 16px solid #A0D0E7;
        border-radius: 50%;
    }
    tr:nth-child(odd) {
    }
    td, th {
        padding: 0px 10px 10px 0px;
    }
    th {
        padding-top: 15px;
        font-family: afont;
    }
    td:first-child, th:first-child {
        padding-left: 10px;
    }

    img {
        width: 64px;
        height: 64px;
    }
    @media (max-width: 320px) {
        font-size: 14px;
        td, th {
            padding: 0;            
            padding-top: 18px;
            text-align: center;
            vertical-align: top;
        }
        td {
            padding-bottom: 18px;
        }
        th {
         background-color: #A0D0E7;
        }
        td:first-child, th:first-child {
            padding-left: 0px;
        }
        td:last-child, th:last-child{
            width: 80px;
        }
        img {
            width: 50px;
            height: 50px;
        };
    }
`
export { TableButtons }