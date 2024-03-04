// src/components/AboutUs.js
import React from "react";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-img">
        <img className="chef" src="chef.avif" alt="Chef" />
      </div>
      <div className="about-txt">
        <h5>About us</h5>
        <p class="p-about">
          {" "}
          At Little Lemon, we believe in the power of great food to bring people
          together. Our menu, inspired by global cuisines with a playful twist,
          is designed to cater to all tastes, from the adventurous foodie to
          those seeking the comfort of classic flavors. Whether you're here for
          our signature lemon-infused dishes, a refreshing beverage, or a sweet
          treat, you're in for a delight.{" "}
        </p>
        <p class="p-about">
          {" "}
          Our story began with a dream to create a space where community,
          creativity, and culinary excellence converge. Each dish tells a story,
          each sip carries a promise of quality, and every visit leaves a
          lasting impression. We're more than just a café; we're a little haven
          of happiness where every guest is treated like family.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
