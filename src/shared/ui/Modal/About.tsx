import ReactDOM from "react-dom";
import AboutStyle from "./About.module.css";
import clsx from "clsx";

type AboutProps = {
    onClose: () => void;
  };

export const About: React.FC<AboutProps> = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div className={clsx(AboutStyle.modalOverlay)} onClick={onClose}>
          <div className={clsx(AboutStyle.modalContent)} onClick={(e) => e.stopPropagation()}>
            <h2>About the project</h2>
            <p>Homework 2</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.getElementById("modal-root")!
      );
}
