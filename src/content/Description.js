import React from 'react';
import styled from 'styled-components'

const Description = ({actualIndex}) => {
        switch (actualIndex) {
            case "Home":
                return (
                    <Container>
                        <h2>{actualIndex}</h2>
                        <h5>Welcome to HOME.</h5>
                        <h5>Hi</h5>
                    </Container>
                )
            case "Turnips":
                return (
                    <Container>
                        <h2>{actualIndex}</h2>
                        <h5>Here is where you can find good prices for turnips</h5> 
                        <h5>or buying from Daisy Mae</h5>
                    </Container>
                )
            case "Bugs":
            case "Fish":
                return (
                    <Container>
                        <h2>{actualIndex}</h2>
                        <h5>If needed, you can use the search option or order by price / alphabetically.</h5>
                        <h5>¡Good luck! And take care</h5>
                    </Container>
                )
            default: 
                return <div>Error loading description.</div>
    }
}

const Container = styled.div`
    position: relative;
    max-width: 800px;
    height: 155px;
    background-color: #F5F2E3;
    display: grid;
    align-content: center; 
    padding: 0 3% 0 3%;
    font-family: afont;
    text-align: center;
`
export { Description }