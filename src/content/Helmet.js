import React from 'react';
import { Helmet } from 'react-helmet'

const RHelmet = () => {
    let pathname = window.location.pathname.replace("/", "")
    if(!pathname) pathname = "home"
    
    let helmet = {
        "home_title" : "Animal Browsing: Tu navegador de Animal Crossing: New Horizons.",
        "home_desc" : "Vende tus nabos o encuentra todo sobre bichos, peces, criaturas del mar... al instante :)",
        "turnips_title" : "Consigue vender AHORA tus nabos | Browsing Animal Crossing.",
        "turnips_desc" : "Vende tus nabos al mejor precio en Animal Crossing. Encuentra docenas de PIN Dodos, turnip.exchange, tweets...",
        "bugs_title" : "Lista Completa de Bichos | Browsing Animal Crossing.", 
        "bugs_desc" : "Toda la información sobre los bichos de Animal Crossing. Mariposa colias, bianor, Cigarra gigante, escarabajo ciervo sierra...", 
        "fish_title" : "Lista Completa de Peces | Browsing Animal Crossing.", 
        "fish_desc" : "Todos los peces de Animal Crossing. Amarguillo, Koi, Siluro, Salmón, Arowana, Pirarucú, Pez luna...", 
        "sea-creatures_title" : "Lista Completa de Criaturas Marinas | Browsing Animal Crossing.", 
        "sea-creatures_desc" : "Descubre todo sobre criaturas marinas y sus secretos. Alga wakame, Estrella de mar, Abulón, Buccino...",     
        "fossil_title" : "Lista Completa de Fósiles | Browsing Animal Crossing.", 
        "fossil_desc" : "Encuentra aquí todos los fósiles. Acantostega, Anquilosaurio, Pteranodonte, Tiranosaurio, Megaloceros, Iguanodonte..." 
    }

    return (
        <Helmet>
            <html lang="es" /> 
            <title>{helmet[pathname+ "_title"]}</title>
            <meta name="robots" content="NOODP" />
            <meta name="description" content={helmet[pathname+ "_desc"]} />
            {pathname === "home" && <link rel="canonical" href={"https://animalbrowsing.com"}></link>}
            {pathname !== "home" && <link rel="canonical" href={"https://animalbrowsing.com/" +pathname}></link>}
        </Helmet>
    )
}

export { RHelmet }