import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor-custom");
    const radius = cursor.offsetHeight / 2;

    document.addEventListener("mousemove", (e) => {
      let top = e.clientY - radius,
        left = e.clientX - radius;

      cursor.style = `top: ${top}px; left: ${left}px`;
    });
  }, []);

  return (
    <div id="cursor-custom" style={styles.cursor}>
      {/* Add any additional content here */}
    </div>
  );
};

const styles = {
  cursor: {
    height: "50px",
    width: "50px",
    pointerEvents: "none",
    position: "fixed",
    background: "#fa",
    borderRadius: "50%",
    boxShadow:
      "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 100px #fff, 0 0 150px #fff"
  }
};

export default CustomCursor;