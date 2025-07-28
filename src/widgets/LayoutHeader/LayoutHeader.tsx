import { useState } from "react";
import { About } from "../../shared/ui/Modal/About";

export const LayoutHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>About the project</button>
      {showModal && <About onClose={handleCloseModal} />}
    </>
  );
};
