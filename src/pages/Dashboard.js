import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import YieldChart from '../components/YieldChart';
import SavingsChart from '../components/SavingsChart';
import { logToBlockchain } from '../utils/blockchainUtils';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    yield: '300 kg/year', // From proposal
    waterUsed: '70-90% less', // Mock from proposal
    electricitySaved: '20-30%', // Mock
    co2Reduction: '20-40%', // Mock
    studentInteractions: '50 knocks/week', // Mock from Knock Door
  });

  const handleLogToChain = () => {
    logToBlockchain(metrics);
    alert('Data logged to simulated blockchain! Check console for details.');
  };

  return (
    <Container className="dashboard-container">
      <h1 className="text-center mb-4">Smart Hydroponics Dashboard</h1>
      <p className="text-center mb-5">Blockchain-enabled monitoring for sustainable urban farming. Aligns with SDG 11: Reduces carbon footprint by 20-40% via IoT efficiency.</p>
      
      <Row>
        {Object.entries(metrics).map(([key, value]) => (
          <Col md={4} key={key} className="metric-card">
            <Card>
              <Card.Body>
                <Card.Title>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</Card.Title>
                <Card.Text>{value}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row className="mt-4">
        <Col md={6}>
          <YieldChart />
        </Col>
        <Col md={6}>
          <SavingsChart />
        </Col>
      </Row>
      
      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleLogToChain}>Log Data to Blockchain</Button>
      </div>
      
      <footer className="text-center mt-5">
        <p>Prototype for MEP Competition. Based on Smart Hydroponics Kit with Forward Education. GitHub: crashingout247</p>
      </footer>
    </Container>
  );
};

export default Dashboard;