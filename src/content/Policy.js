import React from 'react';
import styled from 'styled-components'

const Policy = () => {
    return (
        <PolicyContainer>
            <DescContainer>
                <Logo src="logo.png" alt="Logo de la web una silla con forma de rana" />
                <Ellipsis />
            </DescContainer>
            <PolicyContent>
                <h3>POLITICA DE COOKIES</h3>
                <p>Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar.</p>

                <div>
                    <h4>Tipos de Cookies que utilizamos.</h4>
                    <p>Esta página web utiliza cookies de terceros que son aquellas que se envían a tu ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.</p>
                </div>

                <div>
                    <p>En este caso las Cookies son utilizadas con fines estadísticos relacionados con las visitas que recibe y las páginas que se consultan, quedando aceptado su uso al navegar por ella.</p>
                    <p>_ga (Google) Se usa para distinguir a los usuarios. Duración: 2 años</p>
                    <p>_gid (Google) Se usa para distinguir a los usuarios. Duración: 24h</p>
                    <p>_gat (Google) Se usa para limitar el porcentaje de solicitudes. Duración: 1 min</p>
                </div>
                <div>
                    <p>Para informarse sobre cómo eliminar las cookies de su explorador: <br/>
                    <a href="https://www.google.com/intl/es_es/policies/technologies/types/" target="_blank" rel="noopener noreferrer">haga clic aquí</a>.</p>
                    <br/>
                    <p>Para informarse sobre cómo eliminar las cookies de su explorador:</p>
                    <ul>
                        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                        <li><a href="https://ceporros.com">Internet Explorer</a></li>
                        <li><a href="https://support.apple.com/kb/PH19214?viewlocale=es_ES&amp;locale=es_ES" target="_blank" rel="noopener noreferrer">Safari</a></li>
                        <li><a href="https://presencialismo.com" target="_blank" rel="noopener noreferrer">Opera</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Enlaces a Terceros.</h4>
                    <p>Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>
                </div>
            </PolicyContent>            
        </PolicyContainer>
    )
}

const PolicyContainer = styled.main`
    background-color: #CCE1F2;
    font-size: 16px;
    line-height: 20px;
    a {
        color: blue;
        font-weight: bold;
    }
    h4 {
        padding-top 10px;
        font-weight: bold;
    }
    div {
        padding-top: 20px;
    }
`
const DescContainer = styled.header`
    background-color: #F5F2E3;
    display: grid;
    padding-top: 30px;
    text-align: center;
    max-height: 320px;
    h5 {
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
    }
    @media screen and (max-width: 570px){
        h5 {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 420px){
        h5 {
            width: 80%;
        }
    }
`
const Ellipsis = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 30px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: #CCE1F2;
`
const PolicyContent = styled.div`
    width: 80%;
    margin: auto;
    padding-top: 30px;
    
    span {
        color: green;
    }
    iframe {
        display: block;
        margin: 0 auto;
        margin-top: 30px;
        width: 480px;
        height: 360px;
        border-radius: 18px;
        @media screen and (max-width: 570px){
            width: 360px;
            height: 280px;
        }
        @media screen and (max-width: 420px){
            width: 280px;
            height: 200px;
        }
    }
    @media screen and (max-width: 340px){
        width: 85%;
    }
`
const Logo = styled.img`
    width: 170px;
    display: block;
    margin: 0 auto;
    padding-bottom: 10px;
    @media screen and (max-width: 570px){
        width: 140px;
    }
`

export { Policy }