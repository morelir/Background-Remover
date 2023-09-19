import React from 'react';
import ReactDOM from 'react-dom';
import './Backdrop.scss';

const Backdrop = ({onClick}:{onClick:()=>void}) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    document.getElementById('backdrop-hook') as HTMLElement
  );
};

export default Backdrop;
