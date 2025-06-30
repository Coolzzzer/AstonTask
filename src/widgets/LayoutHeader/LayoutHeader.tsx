import { useState } from "react";
import { About } from "../../shared/ui/Modal/About"

export const LayoutHeader = () => {
  const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button onClick={() => setShowModal(true)}>О проекте</button>
        {showModal && <About onClose={() => setShowModal(false)} />}
      </>
    )
}