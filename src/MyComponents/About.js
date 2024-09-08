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
const About = () => {
    return <div>
        <div style={{ padding: '20px' }}>
            <h1>About Todos List</h1>
            <p style={{ padding:'0px 0px 20px 0px' }}>
                Welcome to the Todos List application! This simple app helps you manage your daily tasks
                effectively. You can add new tasks, mark them as complete, or delete tasks that are no longer
                needed. Whether you're planning your day or organizing your work, the Todos List app is here to
                keep you on track.
            </p>
            <h2>How to Use the Todos List</h2>
            <ul>
                <li style={{ listStyle:'circle',display:'block' }}><strong>Add a Todo:</strong> Enter a title and description for your new task in the form, then click "Add".</li>
                <li style={{ listStyle:'circle',display:'block' }}><strong>View Your Todos:</strong> All your tasks will be displayed in the list below the form.</li>
                <li style={{ listStyle:'circle',display:'block' }}><strong>Delete a Todo:</strong> If a task is no longer needed, click the delete button next to the task.</li>
            </ul>
            <p>
                This app uses your browser's local storage to save your tasks, so you can refresh the page or close your
                browser without losing your todos. Happy organizing!
            </p>
        </div>

    </div>;
}

// About.propTypes = propTypes;
// About.defaultProps = defaultProps;
// #endregion

export default About;