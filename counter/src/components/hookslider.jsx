import { useState } from "react";
import "../index.css";

const defaultSlides = [];

const HookSlider = ({ slides = defaultSlides }) => {
  const [index, setIndex] = useState(0);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const { Component } = slides[index] || {};

  return (
    <div className="slider" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {slides.length > 0 && (
        <>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <button onClick={goPrev}>← Prev</button>
            <button onClick={goNext}>Next →</button>
          </div>
          {Component && <Component onNext={goNext} />}
        </>
      )}
      <div style={{ marginTop: 12 }}>
        {slides.map((s, i) => (
          <span key={s.key} style={{ margin: 4, opacity: i === index ? 1 : 0.35 }}>●</span>
        ))}
      </div>
    </div>
  );
};

export default HookSlider;

 