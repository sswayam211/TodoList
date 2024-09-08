import React from 'react';
import { useState } from "react";
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
const AddTodoForm = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function submit(e){
        // console.log("submit");   
        e.preventDefault();
        if(!title || !description){
            alert("Please fill both Title and Description");
        }else{
            props.addNewTodo(title,description);
        }
    }

    return <div>
        <div className="container">
            <h2>Add new task to To-Do's list</h2>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} autoComplete="off" type="text" name="title" id="title"/>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input value={description} onChange={(e)=>{setDescription(e.target.value)}} autoComplete="off" type="text" name="description" id="description"/>
                </div>

                <div className="form-group">
                    <button type="submit" id="add">Add</button>
                </div>

            </form>
        </div>
    </div>;
}

// #endregion

export default AddTodoForm;