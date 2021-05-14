import firebase from 'firebase';
import React from 'react';
import db from '../firebase';
import Modal from './Modal';
import Task from './Task';

const Tasks = () => {
  const [item, setItem] = React.useState([]);
  const [text, setText] = React.useState('');
  const [visibleModal, setVisibleModal] = React.useState(false);

  React.useEffect(() => {
    db.collection('tasks')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setItem(snapshot.docs.map((doc) => ({ id: doc.id, task: doc.data().task })));
      });
  }, []);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onAddTask = () => {
    if (!text) return;

    db.collection('tasks').add({
      task: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setText('');
    setVisibleModal(false);
  };

  const onVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <div className="tasks">
      {visibleModal && (
        <Modal
          onAddTask={onAddTask}
          onTextChange={onTextChange}
          text={text}
          onVisibleModal={onVisibleModal}
        />
      )}
      {item &&
        item.map((task, index) => (
          <div key={index} className="task">
            <Task task={task} />
          </div>
        ))}
      <span onClick={onVisibleModal} className="tasks__add">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px">
          <path
            fillRule="evenodd"
            d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Tasks;
