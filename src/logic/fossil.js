const showCheckedboxes = () => {
    let checkboxes = document.querySelectorAll("input[name='checks']")
    checkboxes.forEach(box => {
        if(box !== "search-fossil" && localStorage.getItem(box.id)){
            box.checked = true
        }
    })
}
const updateStorage = () => {
    let checkboxes = document.querySelectorAll("input[name='checks']")
    const totalStorage = (box) => {
        if(box.checked === false) {
            localStorage.removeItem(box.id)
        } else if (box.checked === true) {
            localStorage.setItem(box.id, "checked")
        }
    }
    checkboxes.forEach(box => box.addEventListener("change", totalStorage(box)))
    return localStorage.length
}
const sortBySearch = (table, inputSearch) => {
    return table.filter((v) => {
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
}
const clearCheckboxes = () => {
    let checkboxes = document.querySelectorAll("input[name='checks']")
    checkboxes.forEach(box => {
        box.checked = false
        localStorage.removeItem(box.id)
    })
}
const fillCheckboxes = () => {
    let checkboxes = document.querySelectorAll("input[name='checks']")
    checkboxes.forEach(box => {
        box.checked = true
        localStorage.setItem(box.id, "checked")
    })
}

export { showCheckedboxes, updateStorage, sortBySearch, clearCheckboxes, fillCheckboxes }