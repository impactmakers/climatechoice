import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function ConvincedButton() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };
  return (
    <div className={styles.ctaSecondary}>
      <a
        href="#"
        title="See how climate change happens"
        onClick={() => toggleModal()}
      >
        Need convinced? Watch this
      </a>
      {showModal && <div>IM A MODAL</div>}
    </div>
  );
}
