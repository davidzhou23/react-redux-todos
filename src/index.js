import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configStore from './common/configStore';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';

const store = configStore();

class App extends React.Component {
    render() {
        return (<Provider store ={store}>
            <AddTodo />
            <VisibleTodoList />
        </Provider>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));