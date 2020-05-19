import React from 'react';
import styled from 'styled-components'

const Description = ({actualIndex}) => {
        switch (actualIndex) {
            case "Home":
                return (
                    <Container>
                        <h5>Henlo! Welcome to ABBA!!1</h5>
                        <h5>Freel free to consult turnip prices, bugs info... </h5>
                        <h5>¡Good luck! and take care</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <h5>Here you can find good prices for turnips. </h5>
                        <h5>Believing is seeing</h5>
                        <h5>The power of... things? bells stonks goody</h5>
                        <Ellipsis />
                    </Container>
                )
            case "Bugs":
            case "Fish":
                return (
                    <Container>
                        <h5>If needed, you can use the search option or order by price / alphabetically</h5>
                        <Ellipsis />
                    </Container>
                )
            default: 
                return <div>Error loading description. Please contact the web's administrator</div>
    }
}

const Container = styled.div`
    position: relative;
    background-color: #F5F2E3;
    display: grid;
    padding-top: 20px;
    text-align: center;
    max-height: 220px;
    h5 {
        width: 80%;
        margin: 0 auto;
    }
`
const Ellipsis = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 20px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: #A0D0E7;
`
export { Description }