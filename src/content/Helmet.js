import React from 'react';
import { Helmet } from 'react-helmet'

const RHelmet = ({index}) => {

    let helmet =  {
        "home_title" : "Animal Browsing | Find everything about Animal Crossing",
        "home_desc" : "ENG/ESP - Do you need to sell your turnips high? List of bugs, fish, fossils...? Find here all you need for Animal Crossing: New Horizons.",
        "turnips_title" : "Exchange Turnips, Dodocodes | Animal Browsing: All about Animal Crossing",
        "turnips_desc" : "ENG/ESP - Exchange your turnips and get dodocodes in Animal Crossing.",
        "bugs_title" : "Bugs complete list | Animal Browsing: All about Animal Crossing", 
        "bugs_desc" : "List of bugs with all the information you need for Animal Crossing.", 
        "fish_title" : "Fish complete list | Animal Browsing: All about Animal Crossing", 
        "fish_desc" : "List of fish with all the information you need for Animal Crossing.", 
        "fossil_title" : "Fossils complete list | Animal Browsing: All about Animal Crossing", 
        "fossil_desc" : "List of fossils with all the information you need for Animal Crossing." 
    }
    
    if(localStorage.getItem("language") === "es"){
        helmet = {
            "home_title" : "Animal Browsing | Encuentra todo sobre Animal Crossing",
            "home_desc" : "ENG/ESP - Necesitas vender tus nabos a buen precio en Animal Crossing? Consultar listas de bichos, peces y fósiles y más? Aquí lo encontrarás",
            "turnips_title" : "Vende nabos a buen precio - Animal Browsing: Todo sobre Animal Crossing",
            "turnips_desc" : "ENG/ESP - Los precios más recientes del mercado para vender tus nabos en Animal Crossing.",
            "bugs_title" : "Lista de bichos - Animal Browsing: Todo sobre Animal Crossing", 
            "bugs_desc" : "Lista de bichos con la información actualizada al día para Animal Crossing.", 
            "fish_title" : "Lista de peces - Animal Browsing: Todo sobre Animal Crossing", 
            "fish_desc" : "Lista de peces con la información actualizada al día para Animal Crossing.", 
            "fossil_title" : "Lista de fósiles - Animal Browsing: Todo sobre Animal Crossing", 
            "fossil_desc" : "Lista de fósiles actualizada al día para Animal Crossing." 
        }
        
        return (
            <Helmet>
                {console.log(window.location.pathname)}
                <html lang="es" />
                <title>{helmet[index+"_title"]}</title>
                <meta name="description" content={helmet[index+"_desc"]} />
                {index === "home" && <link rel="canonical" href={"https://animalbrowsing.com"}></link>}
                {index !== "home" && <link rel="canonical" href={"https://animalbrowsing.com/" +index}></link>}
            </Helmet>
        )
    }
    else {
        return (
            <Helmet>
                <html lang="en" />
                <title>{helmet[index+"_title"]}</title>
                <meta name="description" content={helmet[index+"_desc"]} />
                {index === "home" && <link rel="canonical" href={"https://animalbrowsing.com"}></link>}
                {index !== "home" && <link rel="canonical" href={"https://animalbrowsing.com/" +index}></link>}
            </Helmet>
        )
    }    
}

export { RHelmet }