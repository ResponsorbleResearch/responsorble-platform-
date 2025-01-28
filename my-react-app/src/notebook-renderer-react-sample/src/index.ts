import React from 'react';
import ReactDOM from 'react-dom';
import { NotebookRenderer } from './renderer';
import './styles.css';

const App = () => {
    return (
        <div>
            <h1>Notebook Renderer</h1>
            <NotebookRenderer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));