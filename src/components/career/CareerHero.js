import React from 'react';
import './CareerHero.css';

// background: image url import passed in
// Accept an optional `bottomStyle` prop so parents can override styles
// (useful to hide the bottom block even when CSS media queries show it)
const CareerHero = ({ background, heading, text, bottomStyle }) => {
  return (
    <div>
    <section
      className="career-hero"
      style={background ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${background})` } : undefined}
      aria-labelledby="career-hero-heading"
    >
      <div className="career-hero-inner">
        <div className="career-hero-left">
          <h1 id="career-hero-heading" className="career-hero-title">
            {heading ? (
              // allow caller to pass already-marked up heading (JSX or string)
              heading
            ) : (
              <>
                <span className="accent">Opportunities</span> <span className="light">At</span><br />
                <span className="company">AGS Green</span>
              </>
            )}
          </h1>
        </div>
        <div className="career-hero-right">
          <p id="career-hero-text" className="career-hero-text">
            {text ? text : (
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam a lobortis sem, vitae fringilla.`
            )}
          </p>
        </div>
      </div>
    </section>
  <div className="career-hero-bottom" {...(bottomStyle ? { style: bottomStyle } : {})}>
          <p id="career-hero-bottom-text" className="career-hero-bottom-text">
            {text ? text : (
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam a lobortis sem, vitae fringilla.`
            )}
          </p>
      </div>
    </div>
  );
};

export default CareerHero;