import React from "react";
import ButtonStyles from "../../styles/Buttons.module.scss";

export default function VideoModal() {
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "300px",
        maxWidth: "100%",
        height: "300px",
        maxWidth: "100%",
        boxShadow: "0 1px 40px 0 rgba(50,47,68,0.2)",
        padding: "1.5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <iframe
        style={{ display: "block" }}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/YLIzhX6pB7g"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />

      <p>What do you think now? </p>
      {/* pull this out into separate component eg greenButton / can I pass props to change the size of the button too? makes it more resusable  */}
      <button
        className={`${ButtonStyles.btnSimple} ${ButtonStyles.btnMd} ${
          ButtonStyles.btnGreen
        } ${ButtonStyles.btnMobile}`}
      >
        Learn how you can help
      </button>
    </div>
  );
}
