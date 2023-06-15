import React, { useState } from 'react';
import Card from './UI/Card';
import Header from './UI/Header';
import TrainingRequestInitiator from './Pages/TrainingRequestInitiator';

function App() {
  const [setTrainingRequests] = useState([]);

  const addTrainingRequestHandler = (trainingRequest) => {
    setTrainingRequests((prevTrainingRequests) => {
      return [...prevTrainingRequests, trainingRequest];
    });
  };

  return (
    <div>
      <Header title="Training Request Form" />
      <div className="page-content">
        <Card>
          <TrainingRequestInitiator onAddTrainingRequest={addTrainingRequestHandler} />
        </Card>
      </div>
    </div>
  );
}

export default App;
