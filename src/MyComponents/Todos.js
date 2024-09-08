import React from 'react';
import TodoItem from './TodoItem'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Todos = (props) => {
    return <div>
        <div className="footer">
            <h2>To-Do's List : </h2>
            <div className="list-items">
                {props.todoList.length === 0 ? "No To-Dos to display,Please add some to-do's to see." :
                    props.todoList.map((todo) => {
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />;
                    })
                }
            </div>
        </div>
    </div>;
}
// #endregion

export default Todos;