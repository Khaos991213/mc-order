import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./LandingPageElements";
import "./LandingPage.css";
import { ArrowDownCircle } from "react-feather";
function LandingPage() {
  function navigateToMenu() {
    //window.scrollBy(0, 1400);
    var target = document.querySelector(".cards");
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition - 100;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition - 100, distance, 1000);
      window.scrollTo(0, run);
      if (timeElapsed < 1000) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }
  return (
    <HeroContainer className='mb-5'>
      <HeroContent>
        <HeroItems className=''>
          <HeroH1>麥當勞點餐系統</HeroH1>
          <HeroBtn
            onClick={navigateToMenu}
            className='btn btn-primary hvr-icon-hang'
          >
            {" "}
            <span className='mr-2 p-5 '>餐點 </span>
            <ArrowDownCircle size={40} className='hvr-icon' />
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default LandingPage;
