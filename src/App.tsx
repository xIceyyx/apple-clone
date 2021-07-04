import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import MainCard from "./components/MainCard";
import SecondCard from "./components/SecondCard";

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

      <SecondCardGrid>
        <SecondCard
          heading={"iMac"}
          infoActive={true}
          info={"Say hello."}
          buttonOneActive={true}
          buttonTwoActive={true}
          buttonOne={"Learn more"}
          buttonTwo={"Buy"}
          backgroundImg={"/images/secondary-img-1.jpg"}
        />
        <SecondCard
          heading={"International Collection"}
          infoActive={true}
          info={"There's a band for every fan"}
          buttonOneActive={true}
          buttonTwoActive={false}
          buttonOne={"Shop the collection"}
          buttonTwo={""}
          backgroundImg={"/images/secondary-img-2.jpg"}
        />
        <SecondCard
          heading={"Buy a Mac or iPad for college. Get AirPods."}
          infoActive={false}
          info={""}
          buttonOneActive={true}
          buttonTwoActive={false}
          buttonOne={"Save with education pricing"}
          buttonTwo={""}
          backgroundImg={"/images/secondary-img-3.jpg"}
        />
        <SecondCard
          heading={"Back to Class"}
          infoActive={true}
          info={"Behind the Mac"}
          buttonOneActive={true}
          buttonTwoActive={true}
          buttonOne={"Watch the film"}
          buttonTwo={"Learn more"}
          backgroundImg={"/images/secondary-img-4.jpg"}
        />
        <SecondCard
          heading={"Card"}
          infoActive={true}
          info={"Get up to 3% Daily Cash back with every purchase."}
          buttonOneActive={true}
          buttonTwoActive={true}
          buttonOne={"Learn more"}
          buttonTwo={"Apply now"}
          backgroundImg={"/images/secondary-img-5.jpg"}
        />
        <SecondCard
          heading={"Who are you, Charlie Brown?"}
          infoActive={true}
          info={
            "A documentary about Peanuts and its creator, Charles M. Schulz."
          }
          buttonOneActive={true}
          buttonTwoActive={false}
          buttonOne={"Watch now"}
          buttonTwo={""}
          backgroundImg={"/images/secondary-img-6.jpg"}
        />
      </SecondCardGrid>
    </div>
  );
}

const Grid = styled.section`
  display: grid;

  grid-template-columns: minmax(100vw, 3010px);

  grid-template-rows: repeat(3, 628px);
  padding-top: 44px;
  overflow: hidden;
  gap: 10px;
`;

const SecondCardGrid = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
  padding: 0 10px;
  margin-bottom: 10px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export default App;
