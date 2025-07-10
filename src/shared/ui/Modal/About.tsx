import ReactDOM from "react-dom";
import AboutStyle from "./About.module.css";
import clsx from "clsx";

type AboutProps = {
    onClose: () => void;
  };
const modalRoot = document.getElementById("modal-root");
export const About: React.FC<AboutProps> = ({ onClose }) => {
  if (!modalRoot) return null;
    return ReactDOM.createPortal(
      <div className={clsx(AboutStyle.modalOverlay)} onClick={onClose}>
      <div className={clsx(AboutStyle.modalContent)} onClick={(e) => e.stopPropagation()}>
        <h2>About the project</h2>
        <p>Homework 2</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
)}
