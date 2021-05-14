import React from 'react';

const Modal = ({ onAddTask, onTextChange, text, onVisibleModal }) => {
  const onEnterPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      onAddTask();
    } else {
      return false;
    }
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <span onClick={onVisibleModal} className="modal__container-button">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22px"
            height="22px">
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
          </svg>
        </span>
        <form className="form">
          <input
            type="text"
            placeholder="Walk a dog"
            value={text}
            onChange={onTextChange}
            onKeyPress={onEnterPress}
          />
          <div onClick={onAddTask}>
            <span>ADD</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
