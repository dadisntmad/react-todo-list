import React from 'react';
import db from '../firebase';

const Task = ({task}) => {
    const [editMode, setEditMode] = React.useState(false);
    const [input, setInput] = React.useState(task.task);

    const onDeleteTask = () => {
        db.collection('tasks').doc(task.id).delete();
    };

    const onToggleTask = () => {
        setEditMode(!editMode);
    };

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onUpdateTask = () => {
        db.collection('tasks').doc(task.id).set({
            task: input,
        }, {merge: true})
        setEditMode(false);
    };

    return (
        <>
            <div className="task__text">
                {
                    editMode ? <div className="task__text-edit">
                        <input type="text" value={input} onChange={onInputChange}/>
                        <svg onClick={onUpdateTask} fill="#000000" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 16 16" width="20px"
                             height="20px">
                            <path
                                d="M 7.5 10.207031 L 4.792969 7.5 L 5.5 6.792969 L 7.5 8.792969 L 13.546875 2.746094 C 13.179688 2.296875 12.625 2 12 2 L 4 2 C 2.898438 2 2 2.898438 2 4 L 2 12 C 2 13.101563 2.898438 14 4 14 L 12 14 C 13.101563 14 14 13.101563 14 12 L 14 4 C 14 3.910156 13.984375 3.820313 13.972656 3.734375 Z"/>
                        </svg>
                    </div> : task.task
                }
            </div>
            <div className="task__buttons">
                <span onClick={onToggleTask} className="task__edit">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         width="20px" height="20px">    <path
                        d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/></svg>
                </span>
                <span onClick={onDeleteTask} className="task__delete">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                         width="20px" height="20px"><path
                        d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/></svg>
                </span>
            </div>
        </>
    )
};

export default Task;