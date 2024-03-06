import React from "react";

const Travel = () => {
  return (
    <section
      className="banner"
      style={{
        height: "600px",
        width: "100%",
        zIndex: "-50",
        position: "absolute",
      }}
    >
      <video
        src="https://cdn.shopify.com/videos/c/o/v/50e992a2070f483c81e0088be4a6e973.mp4"
        playsInline
        muted
        autoPlay
        loop
        type="video/mp4"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </section>
  );
};

export default Travel;
