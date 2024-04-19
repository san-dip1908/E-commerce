import React from "react";

const About = () => {
  return (
    <>
    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          marginTop:"100px"
        }}
      >
        <div style={{ width: "30%" }}>
          <img
            src="https://media.istockphoto.com/id/528779937/photo/brand-new-interior-of-cloth-store.jpg?s=2048x2048&w=is&k=20&c=_I41n9TL3zUvDgqMwf91VR3tDRfxL0_fGGKQuFeode0="
            alt="Girl in a jacket"
            width="400px"
            height="400px"
          />
        </div>
        <div style={{ width: "50%" }}>
          <div style={{ fontSize: "40px", fontWeight: "lighter" }}>
            <p>Sandip Collections.</p>
          </div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
