import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import "../ideation/index.css";

const Target = () => {
  const [strategyData, setStrategyData] = useState({
    bestPractices: '',
    improveFirst: '',
    poorProspects: '',
    worstProspects: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('targetData'));
    if (storedData) {
      setStrategyData(storedData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <div className="ideation-page">
        <h1 style={{ color: 'blue' }}>Target Market Analysis</h1>
        <div className="row-Container-Pestel">
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Best Practices</h2>}
            body={<p>{strategyData.bestPractices}</p>}
          />
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Improve First</h2>}
            body={<p>{strategyData.improveFirst}</p>}
          />
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Poor Prospects</h2>}
            body={<p>{strategyData.poorProspects}</p>}
          />
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Worst Prospects</h2>}
            body={<p>{strategyData.worstProspects}</p>}
          />
        </div>
      </div>
      <div className="rightInput">
        <h1 style={{ color: 'blue' }}>Strategies</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Best Practices Strategy</h2>}
            body={<p>{strategyData.bestPractices}</p>}
          />
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Improve First Strategy</h2>}
            body={<p>{strategyData.improveFirst}</p>}
          />
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Poor Prospects Strategy</h2>}
            body={<p>{strategyData.poorProspects}</p>}
          />
          <Card
            variant="outline"
            header={<h2 style={{ color: '#4A45FF' }}>Worst Prospects Strategy</h2>}
            body={<p>{strategyData.worstProspects}</p>}
          />
        </div>
      </div>
    </div>
  );
};

export default Target;
