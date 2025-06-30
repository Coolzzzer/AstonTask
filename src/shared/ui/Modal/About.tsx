import ReactDOM from "react-dom";
import AboutStyle from "./About.module.css";

type AboutProps = {
    onClose: () => void;
  };

export const About: React.FC<AboutProps> = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div className={AboutStyle.modalOverlay} onClick={onClose}>
          <div className={AboutStyle.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>О проекте</h2>
            <p>Домашнее задание 2</p>
            <button onClick={onClose}>Закрыть</button>
          </div>
        </div>,
        document.getElementById("modal-root")!
      );
}
