import React from 'react';
import SampleComponent from './components/SampleComponent';
import './notebook-renderer-react-sample/src/styles.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>My React App</h1>
            <SampleComponent />
            {/* Additional components or logic can be added here */}
        </div>
    );
};

export default App;