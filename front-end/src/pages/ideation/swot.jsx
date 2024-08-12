import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/button';
import Card from '../../components/card';
import styled from 'styled-components';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import "../ideation/index.css"

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  gap:10px;
`;

const SWOT = () => {
  const location = useLocation();
  const { headline, content } = location.state || {};

  const [swotData, setSwotData] = useState({
    description: '',
    swot:{
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: ''
    },
    pestel:{
      Political: '',
      Economical: '',
      Social: '',
      Technological: '',
      Environmental: '',
      Local: ''
    }
  });

  useEffect(() => {
    const fetchSwot = async () => {
      try {
        const response = await axios.post('http://localhost:5000/generate-swot', { headline, content });
        setSwotData(response.data);
        console.log(swotData);
      } catch (error) {
        console.error('Error fetching SWOT analysis:', error);
      }
    };
    fetchSwot();
  }, [headline, content]);

  return (
    <div>
      <h1 style={{color:'black'}}>SWOT Analysis</h1>
      <Card header={<h2>{headline}</h2>} 
        body={<p>{content}</p>} 
        footer={
        <Container>
          <Button variant='ghost' icon={leftArrow}></Button>
          <p>1/5</p>
          <Button variant='ghost' icon={rightArrow}></Button>
        </Container>
        }>
      </Card>

      <Container>
        <Card variant='ghost' header={<h2>Description</h2>} body={<p>{swotData.description}</p>} />
        <div className='chota-Container'>
          <Card variant="ghost" header={<h2 style={{color: '#349E23'}}>Strengths</h2>} body={<p>{swotData.swot.strengths}</p>}/>
          <Card variant="ghost" header={<h2 style={{color: '#F85F09'}}>Weaknesses</h2>} body={<p>{swotData.swot.weaknesses}</p>}/>
          <Card variant="ghost" header={<h2 style={{color: '#2874E8'}}>Opportunities</h2>} body={<p>{swotData.swot.opportunities}</p>}/> 
          <Card variant="ghost" header={<h2 style={{color: '#CE0F0F'}}>Threats</h2>} body={<p>{swotData.swot.threats}</p>}/>
        </div>
      </Container>

      <h1 style={{color:'black'}}>Pestel Analysis</h1>
      <div className='row-Container-Pestel'>
        <Card header={<h2>Political</h2>} body={<p>{swotData.pestel.Political}</p>} />

        <Card header={<h2>Economical</h2>} body={<p>{swotData.pestel.Economical} </p>} />

        <Card header={<h2>Social</h2>} body={<p>{swotData.pestel.Social} </p>} />

        <Card header={<h2>Technological</h2>} body={<p>{swotData.pestel.Technological} </p>} />

        <Card header={<h2>Environmental</h2>} body={<p>{swotData.pestel.Environmental} </p>} />

        <Card header={<h2>Local</h2>} body={<p>{swotData.pestel.Local} </p>} />
      </div>
    </div>
  );
};

export default SWOT;
