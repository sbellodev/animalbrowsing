import React from 'react';
import { Helmet } from 'react-helmet'

const RHelmet = ({index}) => {
    let helmet =  {
        "home_title" : "Animal Browsing",
        "home_desc" : "ENG/ESP - In Animal Browsing you can sell your turnips high, get list of bugs, fish, fossils and more...",
        "turnips_title" : "Turnips Prices - Animal Browsing",
        "turnips_desc" : "ENG/ESP - Updated turnips prices for you to sell",
        "bugs_title" : "Bugs list - Animal Browsing", 
        "bugs_desc" : "List of bugs with all the information you need for Animal Crossing.", 
        "fish_title" : "Fish list - Animal Browsing", 
        "fish_desc" : "List of fish with all the information you need for Animal Crossing.", 
        "fossil_title" : "Fossils list - Animal Browsing", 
        "fossil_desc" : "List of fossils with all the information you need for Animal Crossing." 
    }
    
    if(localStorage.getItem("language") === "es"){
        helmet = {
            "home_title" : "Animal Browsing",
            "home_desc" : "ENG/ESP - En Animal Browsing podrás vender tus nabos, consultar lista de bichos, peces y fósiles y más... para Animal Crossing.",
            "turnips_title" : "Vender nabos a buen precio - Animal Browsing",
            "turnips_desc" : "ENG/ESP - Los precios más recientes del mercado para vender tus nabos en Animal Crossing.",
            "bugs_title" : "Lista de bichos - Animal Browsing", 
            "bugs_desc" : "Lista de bichos con la información actualizada al día para Animal Crossing.", 
            "fish_title" : "Lista de peces - Animal Browsing", 
            "fish_desc" : "Lista de peces con la información actualizada al día para Animal Crossing.", 
            "fossil_title" : "Lista de fósiles - Animal Browsing", 
            "fossil_desc" : "Lista de fósiles actualizada al día para Animal Crossing." 
        }
        
        return (
                <Helmet>
                    <html lang="es" />
                    <title>{helmet[index+"_title"]}</title>
                    <meta name="description" content={helmet[index+"_desc"]} />
                </Helmet>
        )
    }
    else {
        return (
            <Helmet>
                <html lang="en" />
                <title>{helmet[index+"_title"]}</title>
                <meta name="description" content={helmet[index+"_desc"]} />
            </Helmet>
        )
    }    
}

export { RHelmet }