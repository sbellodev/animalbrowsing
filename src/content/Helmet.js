import React from 'react';
import { Helmet } from 'react-helmet'

const RHelmet = ({index}) => {

    // let helmet =  {
    //     "home_title" : "Animal Browsing | Find everything about Animal Crossing",
    //     "home_desc" : "ENG/ESP - Do you need to sell your turnips high? List of bugs, fish, fossils...? Find here all you need for Animal Crossing: New Horizons.",
    //     "turnips_title" : "Exchange Turnips, Dodocodes | Animal Browsing: All about Animal Crossing",
    //     "turnips_desc" : "ENG/ESP - Exchange your turnips and get dodocodes in Animal Crossing.",
    //     "bugs_title" : "Bugs complete list | Animal Browsing: All about Animal Crossing", 
    //     "bugs_desc" : "List of bugs with all the information you need for Animal Crossing.", 
    //     "fish_title" : "Fish complete list | Animal Browsing: All about Animal Crossing", 
    //     "fish_desc" : "List of fish with all the information you need for Animal Crossing.", 
    //     "sea-creatures_title" : "Sea Creatures complete list | Animal Browsing: All about Animal Crossing", 
    //     "sea-creatures_desc" : "List of sea creatures with all the information you need for Animal Crossing.", 
    //     "fossil_title" : "Fossils complete list | Animal Browsing: All about Animal Crossing", 
    //     "fossil_desc" : "List of fossils with all the information you need for Animal Crossing." 
    // }
    
    //if(localStorage.getItem("language") === "es"){
    let helmet = {
        "home_title" : "Animal Browsing | Encuentra todo sobre Animal Crossing",
        "home_desc" : "Necesitas vender tus nabos a buen precio en Animal Crossing? Consultar listas de bichos, peces y fósiles y más? Aquí lo encontrarás",
        "turnips_title" : "Consigue vender AHORA tus nabos | Todo sobre Animal Crossing en Animal Browsing.",
        "turnips_desc" : "Vende tus nabos al mejor precio en Animal Crossing. Encuentra docenas de PIN Dodos, turnip.exchange, tweets...",
        "bugs_title" : "Lista Completa de Bichos | Todo sobre Animal Crossing en Animal Browsing.", 
        "bugs_desc" : "Lista de bichos con la información actualizada al día para Animal Crossing. Mariposa colias, bianor, Cigarra gigante, escarabajo ciervo sierra...", 
        "fish_title" : "Lista Completa de Peces | Todo sobre Animal Crossing en Animal Browsing.", 
        "fish_desc" : "Lista de peces con la información actualizada al día para Animal Crossing. Amarguillo, Koi, Siluro, Salmón, Arowana, Pirarucú, Pez luna...", 
        "sea-creatures_title" : "Lista Completa de Criaturas Marinas | Todo sobre Animal Crossing en Animal Browsing.", 
        "sea-creatures_desc" : "Lista de criaturas marinas con la información actualizada al día para Animal Crossing. Alga wakame, Estrella de mar, Abulón, Buccino...",     
        "fossil_title" : "Lista Completa de Fósiles | Todo sobre Animal Crossing en Animal Browsing.", 
        "fossil_desc" : "Lista de fósiles actualizada al día para Animal Crossing. Acantostega, Anquilosaurio, Pteranodonte, Tiranosaurio, Megaloceros, Iguanodonte..." 
    }
        
        return (
            <Helmet>
                <html lang="es" /> 
                <title>{helmet[index+"_title"]}</title>
                <meta name="description" content={helmet[index+"_desc"]} />
                {index === "home" && <link rel="canonical" href={"https://animalbrowsing.com"}></link>}
                {index !== "home" && <link rel="canonical" href={"https://animalbrowsing.com/" +index}></link>}
            </Helmet>
        )
    //}
    // else {
    //     return (
    //         <Helmet>
    //             <html lang="en" />
    //             <title>{helmet[index+"_title"]}</title>
    //             <meta name="description" content={helmet[index+"_desc"]} />
    //             {index === "home" && <link rel="canonical" href={"https://animalbrowsing.com"}></link>}
    //             {index !== "home" && <link rel="canonical" href={"https://animalbrowsing.com/" +index}></link>}
    //         </Helmet>
    //     )
    // }    
}

export { RHelmet }