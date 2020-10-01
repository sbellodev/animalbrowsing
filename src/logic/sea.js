const sortSearch = (table, inputSearch) => {
    return table.filter((v) => {
        inputSearch = inputSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        return (
            v.Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
            v.PriceInt.toString().includes(inputSearch) ||
            v.Pattern.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
            v.Season.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
            v.Size.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) ||
            v.Time.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputSearch) 
            )
        })
}

const sortABC = (table) => { 
    //setSortBy("ABC")
    return [...table].sort((a, b) => 
        a.Name > b.Name ? 1 :
        a.Name < b.Name ? -1 : 0)
}
const sortPrice = (table) => { 
    return [...table].sort((a, b) => b.PriceInt - a.PriceInt)
}
const sortReset = (table) => { 
    return [...table].sort((a, b) => a.Number - b.Number)
}

export { sortSearch, sortABC, sortPrice, sortReset }