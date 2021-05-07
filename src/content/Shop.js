import React from 'react';
import styled from 'styled-components'
import products from '../data/shop.json'

const Shop = () => {
    return (
        <HomeContainer>
            <DescContainer>
                <h5>Tienda de Animal Crossing</h5>
                <h5>Consigue todos los tipos de peluches de Animal Crossing en nuestra tienda afiliada.</h5>
                <h5>Fundas, mandos... y el videojuego para regalarle a quien más quieras.</h5>
                <h5 style={{fontSize: 14}}>*No estamos afiliados de ninguna manera a Tom Nook.</h5>
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
    background-color: #CCE1F2;
`
const DescContainer = styled.header`
    grid-area: a;
    background-color: #F5F2E3;
    display: grid;
    padding-top: 30px;
    text-align: center;
    max-height: 320px;
    margin-bottom: 35px;
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
const HomeContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 40px;
    justify-content: space-evenly;
    padding: 32px 0px;
    align-content: center;
    align-items: baseline;
    background: #CCE1F2;

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
        border-radius: 20px;
        box-shadow: 4px 4px 1px white;
    }

    @media screen and (max-width: 900px){
        font-size: 16px;
        img {
            width: 42vw;
            box-shadow: 0px 0px 0px white;
        }
    }
    @media screen and (max-width: 420px){
        font-size: 14px;
    }
    @media screen and (max-width: 360px){
        font-size: 12px;
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
    margin: 32px auto;
    padding: 15px 15px 15px 15px;
    font-size: 16px;
    background-color: white;
    font-weight: bold;
    border-radius: 12px;
    border: 1px solid black;
    a {
        color: black;
    }
`

export { Shop }