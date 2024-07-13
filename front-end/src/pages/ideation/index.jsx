// import React, { useState, useEffect } from "react";
// import "../ideation/index.css";
// import Card from "../../components/card";
// import axios from 'axios';
// import "../ideation/ideationInput.json"

// const Ideas = () => {
//   const [headlines, setHeadlines] = useState([]);
//   const [content, setContent] = useState([]);
//   const [formData, setFormData] = useState({
//     location: '',
//     skills: '',
//     interests: '',
//     specific_area_of_business: '',
//     financial_resources: '',
//     tools: '',
//     facilities: ''
//   });

  

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/generate-ideas', {
//           location: "Kolkata, India",
//           skills: "Programming and Data Science",
//           interests: "Business",
//           specific_area: "",
//           resources: "Limited financial resources, basic tools, and facilities"
//         });
//         setHeadlines(response.data.headlines);
//         setContent(response.data.content);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="row-Container">
//         {headlines.map((headline, index) => (
//           <Card
//             key={index}
//             header={<h2 style={{ color: '#2A282F' }}>{headline}</h2>}
//             body={<p style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{content[index]}</p>}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Ideas;

import React from 'react';
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

const PostGeneration = () => {
  return (
    <div>
      <Card header={<h2>Green Grocery Delivery</h2>} 
        body={<p>Delivering fresh, locaDelivering fresh, locally sourced, organic produce directly to your door. Our eco-friendly service ensures you enjoy healthy, sustainable eating with the convenience of weekly deliveries tailored to your preferenceslly sourced, organic produce directly to your door. Convenient, eco-friendly service ensuring healthy, sustainable eating for all</p>} 
        footer={
        <Container><Button variant='ghost' icon={leftArrow}></Button>
        <p>1/5</p>
        <Button variant='ghost' icon={rightArrow}></Button>
        </Container>
        }>
      </Card>
      {/* <Button variant = "primary">e commerece</Button>
      <h2>Green Grocery Delivery</h2> */}

      <Container>
        <Card variant='ghost' header={<h2>Description</h2>} 
        body={<p>Delivering fresh, locaDelivering fresh, locally sourced, organic produce directly to your door. Our eco-friendly service ensures you enjoy healthy, sustainable eating with the convenience of weekly deliveries tailored to your preferenceslly sourced, organic produce directly to your door. Convenient, eco-friendly service ensuring healthy, sustainable eating for all Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae, numquam iure doloremque magnam cum explicabo omni..</p>} 
        ></Card>

        <div className='chota-Container'>

            <Card variant="ghost" header={<h2 style={{color: '#349E23'}}>Strengths</h2>} 
            body={<p style={{textOverflow:'ellipsis', overflow:'hidden', borderRight: '0.5px solid black',height: '100px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi et voluptates repellendus, aliquid mollitia tempore accusantium at officia illo Lorem ipsum dolor,</p>}/>
  
          <Card variant="ghost" header={<h2 style={{color: '#F85F09'}}>Weekness</h2>} 
            body={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi et voluptates repellendus, aliquid mollitia tempore accusantium at officia illo
            </p>}/>

          <Card variant="ghost" footer={<h2 style={{color: '#2874E8'}}>Opportunities</h2>} 
            body={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo odit itaque amet placeat ducimus autem quibusdam, dolorem delectus ratione.</p>}/> 
        
          <Card variant="ghost" footer={<h2 style={{color: '#CE0F0F'}}>Threat</h2>} 
          body={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo odit itaque amet placeat ducimus autem quibusdam, dolorem delectus ratione.</p>}/>
        </div>
        </Container>

    </div>
  );
};

export default PostGeneration;

