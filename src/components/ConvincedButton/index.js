import React, { useState } from "react";

import VideoModal from "../VideoModal";

import styles from "./styles.module.scss";

export default function ConvincedButton() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.ctaSecondary}>
      <a title="See how climate change happens" onClick={() => toggleModal()}>
        Need convinced? Watch this
      </a>
      {showModal && (
        <VideoModal closeModal={closeModal} closeClick={toggleModal} />
      )}
    </div>
  );
}
