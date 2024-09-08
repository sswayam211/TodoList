import React from 'react';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 * 
 */
const TodoItem = (props) => {
    return <>
        <div style={{padding: '20px 0px'}}>
        <div className="title item"><h3>{props.todo.title}</h3></div>
        <div className="discription item">{props.todo.description}</div>
        <button id="delete" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
        <hr />
    </div >
    </>;
}

// #endregion

export default TodoItem;