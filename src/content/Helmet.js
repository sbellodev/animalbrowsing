import React from 'react';
import { Helmet } from 'react-helmet'

const RHelmet = () => {
    let pathname = window.location.pathname.replace("/", "")
    if(!pathname) pathname = "home"
    
    let helmet = {
        "home_title" : "Animal Browsing, tu kit para sobrevivir en Animal Crossing.",
        "home_desc" : "Encuentra aquí nabos a buen precio, PIN DODOs y todo sobre bichos, peces, criaturas del mar, fósiles y mucho más en Animal Crossing: New Horizons.",
        "turnips_title" : "Encuentra nabos a buen precio y PIN DODO | Animal Crossing.",
        "turnips_desc" : "Encuentra gente para vender tus nabos con PIN DODOS ahora mismo.",
        "bugs_title" : "Lista Completa de Bichos | Animal Crossing: New Horizons.", 
        "bugs_desc" : "Todo sobre Bichos de Animal Crossing: New Horizons. Mariposa colias, bianor, Cigarra gigante, escarabajo ciervo sierra...", 
        "fish_title" : "Lista Completa de Peces | Animal Crossing: New Horizons.", 
        "fish_desc" : "Todos los Peces de Animal Crossing. Amarguillo, Koi, Siluro, Salmón, Arowana, Pirarucú, Pez luna...", 
        "sea-creatures_title" : "Lista Completa de Criaturas Marinas | Animal Crossing: New Horizons.", 
        "sea-creatures_desc" : "Descubre todo sobre Criaturas Marinas y sus secretos. Alga wakame, Estrella de mar, Abulón, Buccino...",     
        "fossil_title" : "Lista Completa de Fósiles | Animal Crossing: New Horizons.", 
        "fossil_desc" : "Encuentra aquí todos los fósiles. Acantostega, Anquilosaurio, Pteranodonte, Tiranosaurio, Megaloceros, Iguanodonte...",
        "shop_title": "Tienda Online de Animal Crossing: New Horizons",
        "shop_desc": "Desde peluches hasta videojuegos, encuentra lo que buscas y mucho más en nuestra tienda online." 
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