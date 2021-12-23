import React from "react";
import styled from "styled-components";
import articles from "../data/articles.json";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const RenderArticle = ({ articles }) => {
  return articles.map((v, ind) => {
    return (
      <Article key={ind}>
        <br />
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: v.Titulo }}></div>
        {v.hasVideo && <HomeVideo url={v.videoUrl} />}
        <br />
        <br />
        <br />
      </Article>
    );
  });
};
const HomeVideo = ({ url }) => (
  <iframe
    src={url}
    title="Animal Crossing Halloween"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Timeline = () => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="AC_canela"
      borderColor="#FFFFFF"
      noHeader
      noFooter
      noScroolbar
      transparent
      placeholder="Cargando contenido..."
      chrome="nofooter transparent noheader transparent"
      options={{
        id: "profile:AC_canela",
        height: 400,
        width: 600,
        tweetLimit: 3,
      }}
    />
  );
};

const Home = () => {
  return (
    <HomeContainer>
      <DescContainer>
        <Logo src="logo.png" alt="Logo de la web una silla con forma de rana" />
        <h5>¡Bienvenid@ a Animal Browsing!</h5>
        <h5>
          Encuentra nabos a buen precio, PIN DODOs y todo sobre bichos, peces,
          criaturas del mar, fósiles...
        </h5>
        <h5>para Animal Crossing: New Horizons</h5>
        <h5>¡Buena suerte! y cuídate</h5>
        <Ellipsis />
      </DescContainer>
      <SideBar>
        <p></p>
      </SideBar>
      <HomeContent>
        <Timeline />
        <RenderArticle articles={articles} />
      </HomeContent>
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "a a"
    "b c"
    "b c";
  background-color: #cce1f2;
  font-size: 16px;
  line-height: 20px;
  @media screen and (max-width: 900px) {
    grid-template-areas:
      "a a"
      "b b"
      "c c";
  }
`;
const DescContainer = styled.header`
    grid-area: a;
    background-color: #F5F2E3;
    display: grid;
    padding-top: 30px;
    text-align: center;
    max-height: 320px;
    margin-bottom 70px;
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
`;
const Ellipsis = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 30px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #cce1f2;
`;
const HomeContent = styled.div`
  grid-area: b;
  display: grid;
  justify-items: center;
  border-right: 1px solid white;

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
    @media screen and (max-width: 570px) {
      width: 360px;
      height: 280px;
    }
    @media screen and (max-width: 420px) {
      width: 280px;
      height: 200px;
    }
  }
  @media screen and (max-width: 340px) {
    width: 85%;
  }
`;
const Article = styled.div`
  border-bottom: 1px solid ghostwhite;
`;
const SideBar = styled.aside`
    grid-area c;
    margin: 0 auto;
`;
const Logo = styled.img`
  width: 170px;
  display: block;
  margin: 0 auto;
  padding-bottom: 10px;
  @media screen and (max-width: 570px) {
    width: 140px;
  }
`;
export { Home };
