import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap; //INFO: we're going to have multiple videos in the homepage.
  justify-content: space-between;
`;


const Home = () => {
  return (
    <Container>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Container>
  )
}

export default Home