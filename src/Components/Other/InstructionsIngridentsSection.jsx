import React, { useState } from 'react';

const InstructionsIngridentsSection = ({ Instructions, Ingredients }) => {
  const [activeTab, setActiveTab] = useState('Instructions');

  return (
    <>

        <div className="Recipe-Instruc-Ingrid">
            <div
                className={activeTab === 'Instructions' ? 'active' : ''}
                onClick={() => setActiveTab('Instructions')}
                id="instructions"
            >
                Instructions
            </div>
            <div
                className={activeTab === 'Ingredients' ? 'active' : ''}
                onClick={() => setActiveTab('Ingredients')}
                id="ingredients"
            >
                Ingredients
            </div>
        </div>
        <div className="info-needed">
            {activeTab === 'Instructions' ? Instructions : Ingredients}
        </div>
    
    </>
    

  );
};

export default InstructionsIngridentsSection;
