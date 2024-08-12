// import React from 'react';
// import Button from '../../components/button';
// import Card from '../../components/card';
// import styled from 'styled-components';
// import rightArrow from '../../assets/rightArrow.png';
// import leftArrow from '../../assets/leftArrow.png';
// import "../ideation/index.css"

// const Container = styled.div`
//   margin: 10px;
//   display: flex;
//   flex-direction: row;
//   gap:10px;
// `;

// const PostGeneration = () => {
//   return (
//     <div>
//       <Card header={<h2>Green Grocery Delivery</h2>} 
//         body={<p>Delivering fresh, locaDelivering fresh, locally sourced, organic produce directly to your door. Our eco-friendly service ensures you enjoy healthy, sustainable eating with the convenience of weekly deliveries tailored to your preferenceslly sourced, organic produce directly to your door. Convenient, eco-friendly service ensuring healthy, sustainable eating for all</p>} 
//         footer={
//         <Container><Button variant='ghost' icon={leftArrow}></Button>
//         <p>1/5</p>
//         <Button variant='ghost' icon={rightArrow}></Button>
//         </Container>
//         }>
//       </Card>
//       {/* <Button variant = "primary">e commerece</Button>
//       <h2>Green Grocery Delivery</h2> */}

//       <Container>
//         <Card variant='ghost' header={<h2>Description</h2>} 
//         body={<p>Delivering fresh, locaDelivering fresh, locally sourced, organic produce directly to your door. Our eco-friendly service ensures you enjoy healthy, sustainable eating with the convenience of weekly deliveries tailored to your preferenceslly sourced, organic produce directly to your door. Convenient, eco-friendly service ensuring healthy, sustainable eating for all Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae, numquam iure doloremque magnam cum explicabo omni..</p>} 
//         ></Card>

//         <div className='chota-Container'>

//             <Card variant="ghost" header={<h2 style={{color: '#349E23'}}>Strengths</h2>} 
//             body={<p style={{textOverflow:'ellipsis', overflow:'hidden'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi et voluptates repellendus, aliquid mollitia tempore accusantium at officia illo Lorem ipsum dolor,</p>}/>
  
//           <Card variant="ghost" header={<h2 style={{color: '#F85F09'}}>Weekness</h2>} 
//             body={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi et voluptates repellendus, aliquid mollitia tempore accusantium at officia illo Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea esse aliquam impedit ipsa in cum odio ratione. Aliquid, odit porro.
//             </p>}/>

//           <Card variant="ghost" footer={<h2 style={{color: '#2874E8'}}>Opportunities</h2>} 
//             body={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo odit itaque amet placeat ducimus autem quibusdam, dolorem delectus ratione.</p>}/> 
        
//           <Card variant="ghost" footer={<h2 style={{color: '#CE0F0F'}}>Threat</h2>} 
//           body={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo odit itaque amet placeat ducimus autem quibusdam, dolorem delectus ratione.</p>}/>
//         </div>
//         </Container>

//     </div>
//   );
// };

// export default PostGeneration;

import React from 'react';
import Card from '../../components/card'; // Import Card component or use your own UI components
import { useLocation, useNavigate } from 'react-router-dom';

const PostGeneration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { headlines = [], content = [] } = location.state || {};

  const handleCardClick = (headline, content) => {
    navigate('/postgeneration/swot', { state: { headline, content } });
  };

  return (
    <div>
      <div className="row-Container">
        {headlines.map((headline, index) => (
          <Card
            key={index}
            header={<h2 style={{ color: '#2A282F' }}>{headline}</h2>}
            body={
              <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', boxSizing: 'border-box' }}>
                {content[index]}
              </p>
            }
            onClick={() => handleCardClick(headline, content[index])} // Handle card click
          />
        ))}
      </div>
    </div>
  );
};

export default PostGeneration;
