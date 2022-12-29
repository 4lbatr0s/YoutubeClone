import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props)=> props.type !=="sm" && "360px"};
  margin-bottom: ${(props)=> props.type ==="sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props)=> props.type ==="sm" && "flex"}; //INFO: HOW TO USE PROPS IN STYLED COMPONENTS!
  flex-wrap: ${(props)=> props.type ==="sm" && "wrap"};
`;

const CardImage = styled.img`
  width: 100%;
  height:${(props)=> props.type ==="sm" ? "120px" : "202px"};
  background-color: #999;
  border-radius: 3%;
  flex:1;
`;

const CardDetails = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top:${(props)=> props.type ==="sm" ? "0px" : "16px"};
  flex:1;
`;
const ChannelImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 36px;
  height: 36px;
  background-color: #999;
  display: ${(props)=> props.type ==="sm" && "none"};
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props)=> props.type ==="sm" && "10px"};
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

const Card = ({type}) => {
  return (      //INFO: we remove text decoration in order to remove link underlines.
    <Link to="/video/meatthezo" style={{textDecoration:"none"}}>
      <Container type ={type}>
        <CardImage type={type} src="https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg"></CardImage>
        <CardDetails type ={type}>
          <ChannelImg type={type} src="https://i.kym-cdn.com/entries/icons/mobile/000/012/982/039.jpg"></ChannelImg>
          <Texts type={type}>
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
