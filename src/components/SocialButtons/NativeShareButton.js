import React from "react";
import styles from "./styles.module.scss";
import buttonStyles from "../../styles/Buttons.module.scss";

/**
 * @typedef Props
 * @prop {string} title
 * @prop {string} text
 * @prop {string} url
 */

/**
 * Renders a button that opens the Web Share API dialog
 * with the, in Props, provided text, title and url.
 *
 * @param {Props} props
 */
export default function NativeShareButton(props) {
  const { title, text, url } = props;

  async function openShareDialog() {
    try {
      await navigator.share({
        title,
        text,
        url
      });
    } catch (shareError) {
      // Handle share error maybe?
      // This would be trying to share on unsecure origins...
    }
  }

  return (
    <>
      <button
        className={`${styles.button} ${buttonStyles.btnSimple}`}
        onClick={openShareDialog}
      >
        Share
      </button>
    </>
  );
}
