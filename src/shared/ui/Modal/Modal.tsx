import { ModalContext } from "../../context/ModalContext";

export const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <ModalContext.Provider value={{ onClose }}>
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  </ModalContext.Provider> 
);