import React, { useState } from "react";

import VideoModal from "../VideoModal";

import styles from "./styles.module.scss";

export default function ConvincedButton() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.ctaSecondary}>
      <button className={styles.removeDefault} onClick={() => openModal()}>
        Need convincing? Watch this
      </button>
      {showModal && (
        <VideoModal closeModal={closeModal} closeClick={closeModal} />
      )}
    </div>
  );
}
