import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import MainCard from "./components/MainCard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Grid>
        <MainCard
          spashPopup={true}
          heading={"iPhone 12"}
          info={"Blast past fast."}
          pricingOne={"From $29.12/mo. for 24 mo. or $699 before trade‑in"}
          pricingTwo={"Buy directly from Apple with special carrier offers"}
          buttonOne={"Learn more"}
          buttonTwo={"Buy"}
          backgroundImg={"/images/main-img-1.jpg"}
          textColor={"black"}
          showPricing={true}
          paddingTop={"94px"}
        />

        <MainCard
          spashPopup={false}
          heading={"iPhone 12 Pro"}
          info={"It’s a leap year."}
          pricingOne={"From $41.62/mo. for 24 mo. or $999 before trade‑in"}
          pricingTwo={"Buy directly from Apple with special carrier offers"}
          buttonOne={"Learn more"}
          buttonTwo={"Buy"}
          backgroundImg={"/images/main-img-2.jpg"}
          textColor={"white"}
          showPricing={true}
          paddingTop={"64px"}
        />

        <MainCard
          spashPopup={false}
          heading={"iPad Pro"}
          info={"Supercharged by the Apple M1 chip."}
          pricingOne={"From $41.62/mo. for 24 mo. or $999 before trade‑in"}
          pricingTwo={"Buy directly from Apple with special carrier offers"}
          buttonOne={"Learn more"}
          buttonTwo={"Buy"}
          backgroundImg={"/images/main-img-3.jpg"}
          textColor={"white"}
          showPricing={false}
          paddingTop={"64px"}
        />
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;

  grid-template-columns: minmax(100vw, 3010px);

  grid-template-rows: repeat(3, 628px);
  padding-top: 44px;
  overflow: hidden;
  gap: 10px;
`;

export default App;
