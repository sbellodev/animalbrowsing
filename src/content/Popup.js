import React from 'react'
import styled from 'styled-components'

const Popup = () =>  {
    function acceptPolicy(e){
        let popup = e.target.parentNode
        popup.style.display = "none"
        sessionStorage.setItem("CookieAccepted", 1)
    }
    return(
      <Container>
          <p>Utilizamos cookies anónimas de Google Analytics para mejorar la web según lo que te guste. Más información en <a href="/policy"> Política de Cookies</a>.</p>
          <button onClick={(e) => acceptPolicy(e)}>OK</button>
      </Container>
  )
}


const Container = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: ghostwhite;
    
    left: 0px;
    p {
        padding: 0 10px;
    }
    button {
        padding: 10px 12px;
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        margin: 0 10px;
    }
    a {
        color: var(--colorFooter);
        font-weight: bold;
        font-style: italic;
    }
`
export { Popup } 