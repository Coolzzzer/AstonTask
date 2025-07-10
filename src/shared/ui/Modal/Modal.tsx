import { createContext} from "react";

export const ModalContext = createContext<{ onClose: () => void }>({ onClose: () => {} });

export const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <ModalContext.Provider value={{ onClose }}>
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  </ModalContext.Provider>
);
