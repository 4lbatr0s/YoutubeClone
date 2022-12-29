import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  border-radius: 3%;
`;

const CardDetails = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 16px;
`;
const ChannelImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 36px;
  height: 36px;
  background-color: #999;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const InfoItem = styled.span``;

const Card = () => {
  return (      //INFO: we remove text decoration in order to remove link underlines.
    <Link to="/video/meatthezo" style={{textDecoration:"none"}}>
      <Container>
        <CardImage src="https://i.ytimg.com/an_webp/jNQXAC9IVRw/mqdefault_6s.webp?du=3000&sqp=CLjytZ0G&rs=AOn4CLBwWov1KSE3261_ocrFunrXsV9BUQ"></CardImage>
        <CardDetails>
          <ChannelImg src="https://i.kym-cdn.com/entries/icons/mobile/000/012/982/039.jpg"></ChannelImg>
          <Texts>
            <Title>Me at the Zoo</Title>
            <ChannelName>Cloner</ChannelName>
            <Info>
              <InfoItem>12315 Views</InfoItem>
              {" • "}
              <InfoItem>16 years ago</InfoItem>
            </Info>
          </Texts>
        </CardDetails>
      </Container>
    </Link>
  );
};

export default Card;
