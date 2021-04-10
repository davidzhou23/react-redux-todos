import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../redux/addTodos';

const AddTodo = (props) => {
    console.log('AddTodo')
    let input
    return (<div>
        <form onSubmit = { (e) => {
            e.preventDefault()
            if (!input.value.trim() == '') {
                props.addTodo(input.value)
                // dispatch(addTodo(input))
            }
            input.value = ''
        }}>
            <input ref ={(node) => {input = node}}></input>
            <button type='submit'>add Todo</button>
        </form>
    </div>);
}


const mapDispatchToProps = (dispatch) => {
    console.log('AddTodo mapDispatchToProps')
    return {
        addTodo: (input) => {dispatch(addTodo(input))}
    };
}

export default connect(null, mapDispatchToProps)(AddTodo);