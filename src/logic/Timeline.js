import React from "react";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Timeline = () => {
    return (
      <TwitterTimeline>
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
            tweetLimit: 3
          }}
      />
      </TwitterTimeline>
    );
  };

const TwitterTimeline = styled.div`
  width: 600px;

  @media screen and (max-width: 570px) {
    width: 500px;
  }
  
  @media screen and (max-width: 420px) {
    width: 300px;
  }
`;

export { Timeline };