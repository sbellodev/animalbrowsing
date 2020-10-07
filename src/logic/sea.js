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
const sortSeason = (table, imgEarth, clickCount) => {

    let btn_season = document.getElementsByClassName("btn-season")[0]
    console.log("pre clickcount/clickCount " + clickCount)
   
    switch(clickCount) {
        case 1:
            btn_season.src = imgEarth.EarthNPNG
            break;
        case 2:
            btn_season.src = imgEarth.EarthSPNG
            break;
        case 0:
        default:
            btn_season.src = imgEarth.Earth                
            break;
    }

    var time = new Date();
    let current_month = time.getMonth() + 1

    return table.filter((v) => {
        v.Temp = clickCount === 1 ? v.SeasonN : clickCount === 2 ? v.SeasonS : ""  
        let Season
        switch(clickCount){
            case 1:
                Season = v.SeasonIntN
                break
            case 2:
                Season = v.SeasonIntS
                break
            default:
                return v
        }

        if(Season.length === 1 && current_month === Season[0]) { // ex: Firefly
                return true
        }
        else if(Season.length === 2) { // ex: Mar-Apr (3, 4)
            if(Season[0] < Season[1]) {
                if(current_month >=  Season[0] && current_month <=  Season[1]) {
                    return true
                }
            }
            else if(Season[0] > Season[1]) {
                if(current_month >=  Season[0] || current_month <=  Season[1]) {
                    return true
                } 
            }
        }
        else if(Season.length === 3) { // ex: Mar-Apr, Jun (3, 4, 6) 
            if(current_month === Season[2]) {
                return true
            }
            if(Season[0] < Season[1]) {
                if(current_month >=  Season[0] && current_month <=  Season[1]) {
                    return true
                }
            }
            else if(Season[0] > Season[1]) {
                if(current_month >=  Season[0] || current_month <=  Season[1]) {
                    return true
                } 
            }
        }
        else if(Season.length === 4) { // ex: Mar-Apr, Jun-Jul (3, 4, 6, 7) 
            if(Season[0] < Season[1]) {
                if(current_month >=  Season[0] && current_month <=  Season[1]) {
                    return true
                }
            }
            else if(Season[2] < Season[3]) {
                if(current_month >=  Season[2] && current_month <=  Season[3]) {
                    return true
                }
            }
            else if(Season[0] > Season[1]) {
                if(current_month >=  Season[0] || current_month <=  Season[1]) {
                    return true
                }
            }
            else if(Season[2] > Season[3]) {
                if(current_month >=  Season[2] || current_month <=  Season[3]) {
                    return true
                }
            }
        }

        return false
    })
}
const sortABC = (table) => { 
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

export { sortSearch, sortSeason, sortABC, sortPrice, sortReset }