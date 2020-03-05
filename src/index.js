import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import HomeworkStore from './stores/HomeworkStore';

const homeworkStore = new HomeworkStore();

const RenderComponent = () => (
  <Provider homeworkStore={homeworkStore}>
    <App />
  </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));
