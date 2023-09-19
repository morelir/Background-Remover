import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import close from "../assets/close.png";
import "./Modal.scss";

interface ModalProps {
  className?: string;
  style?: object;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  show: boolean;
  onCancel: () => void;
}

const ModalOverlay: React.FC<ModalProps> = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h1>{props.header}</h1>
        <img
          src={close}
          alt="close"
          className="modal_close"
          onClick={props.onCancel}
        />
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={400}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
