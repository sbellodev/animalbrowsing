import React from 'react';

const showCheckedboxes = () => {
    let checkboxes = document.querySelectorAll("input[name='checks']")
    checkboxes.forEach(checkbox => {
        if(checkbox != 0 && localStorage.getItem(checkbox.id)){
            checkbox.checked = true
        }
    })
}

const checkStorage = () => {
    let checkboxes = document.querySelectorAll("input[name='checks']")
    const totalStorage = (checkbox) => {
        if(checkbox.checked === false) {
            localStorage.removeItem(checkbox.id)
        } else if (checkbox.checked === true) {
            localStorage.setItem(checkbox.id, "checked")
        }
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", totalStorage(checkbox)))
    return localStorage.length
}

export { showCheckedboxes, checkStorage }