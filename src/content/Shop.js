import React from 'react';
import styled from 'styled-components'
import products from '../data/shop.json'

const Shop = () => {
    return (
        <HomeContainer>
            <DescContainer>
                <h5>SHOP SHOP SHOP SHOP</h5>
                <h5>Encuentra nabos a buen precio, PIN DODOs y todo sobre bichos, peces, criaturas del mar, fósiles...</h5>
                <h5>para Animal Crossing: New Horizons</h5>
                <h5>¡Buena suerte! y cuídate</h5>
                <Ellipsis />
            </DescContainer>
            <HomeContent>
            {products.map((prod, ind) => (
                    <Product key={ind} href={prod.link} rel="noopener noreferrer" target="_blank"><img src={prod.img} alt={prod.alt} />
                        <figure>
                            <Title>{prod.title}</Title>
                            <Price>{prod.price_str}</Price>
                        </figure>
                    </Product>
                ))}
            </HomeContent>

            <Btn><a rel="noopener noreferrer" target="_blank" href="https://amzn.to/3k2Gamr">Ver más ofertas en AMAZON</a></Btn>

        </HomeContainer>
    )
}



const HomeContainer = styled.main`
    background-color: white;
    padding-bottom: 50px;
`
const DescContainer = styled.header`
    grid-area: a;
    background-color: #F5F2E3;
    display: grid;
    padding-top: 30px;
    text-align: center;
    max-height: 320px;
    margin-bottom: 70px;
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
    background-color: white;
`
const HomeContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 40px;
    justify-content: space-evenly;
    padding: 32px 0px;
    align-content: center;
    align-items: baseline;

    @media screen and (max-width: 900px){
        grid-template-columns: auto auto;
    }
`
const Product = styled.a`
    color: black;
    figure {
        padding: 0px;
        margin: 0;
        max-width: 200px;
    }
    &:hover {
        img {
            opacity: 0.6;
        }
    }
    img {
        display: block;
        margin: 0 auto;
        max-width: 200px;
        max-height: 200px;
        margin-bottom: 10px;
        object-fit: contain;
    }

    @media screen and (max-width: 900px){
        img {
            width: 42vw;
        }
    }
`
const Text = styled.div``
const Title = styled.figcaption`
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
`
const Price = styled.figcaption`
    font-size: 15px;
    text-align: center;
`

const Btn = styled.button`
    display: block;
    margin: auto;
    padding: 15px 15px 15px 15px;
    font-size: 16px;
    background-color: var(--secondaryColor);
    font-weight: bold;
    border-radius: 12px;
    border: 1px solid black;
    a {
        color: black;
    }
`

export { Shop }