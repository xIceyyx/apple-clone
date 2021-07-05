import React from "react";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface Props {
  spashPopup: boolean;

  heading: string;
  info: string;

  showPricing: boolean;
  pricingOne: string;
  pricingTwo: string;

  buttonOne: string;
  buttonTwo: string;

  backgroundImg: string;
  mobileBackGroundImg: string;

  textColor: string;

  paddingTop: string;
}

const MainCard = (props: Props) => {
  const Background = styled.div`
    background-image: url(${props.backgroundImg});
    width: 2975px;
    height: 624px;
    background-size: 2975px 624px;
    background-repeat: no-repeat;

    z-index: -1;
    position: absolute;
    border: 0;
    margin: 0;
    padding: 0;
    left: calc(50% + 0px);
    right: auto;
    bottom: 0px;
    top: auto;
    overflow: hidden;
    transform: translateX(-50%) scale(1.15) translateY(-2.5%);

    @media only screen and (max-width: 735px) {
      transform: translateX(-50%) scale(1) translateY(1.75%);
      background-image: url(${props.mobileBackGroundImg});
      width: 734px;
      height: 548px;
      background-size: 734px 548px;
      z-index: -1;
    }
  `;

  return (
    <Wrapper style={{ paddingTop: props.paddingTop }}>
      {props.spashPopup && (
        <ShopOnline>
          <p>
            <span>Shop online</span> and get Specialist help, free no-contact
            delivery, and more
          </p>
        </ShopOnline>
      )}

      <h2 className="heading" style={{ color: props.textColor }}>
        {props.heading}
      </h2>
      <p className="info" style={{ color: props.textColor }}>
        {props.info}
      </p>
      {props.showPricing && (
        <div className="pricing-wrapper">
          <p className="pricing">{props.pricingOne}</p>
          <p className="pricing">{props.pricingTwo}</p>
        </div>
      )}
      <div className="buttons">
        <div className="button-wrapper">
          <button>
            {props.buttonOne} <ChevronRightIcon className="btn-icon" />
          </button>
        </div>

        <div className="button-wrapper">
          <button>
            {props.buttonTwo} <ChevronRightIcon className="btn-icon" />
          </button>
        </div>
      </div>
      <Background />
    </Wrapper>
  );
};

export default MainCard;

const Wrapper = styled.div`
  overflow: hidden;
  padding-top: 94px;
  height: 628px;
  width: 100vw;
  max-width: 2560px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .heading {
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    letter-spacing: -0.005em;
  }

  .info {
    font-size: 28px;
    line-height: 1.10722;
    font-weight: 400;
    letter-spacing: 0.004em;
    margin-top: 6px;

    margin-top: 15px;
    color: #252525;
  }

  .pricing {
    font-size: 17px;
    color: #86868b;
    line-height: 1.47059;
    text-align: center;
  }

  .buttons {
    display: flex;

    .button-wrapper {
    }
  }

  .button-wrapper {
    display: flex;
    font-size: 20px;
    align-items: center;
    margin-top: 15px;

    &:not(:first-child) {
      margin-left: 35px;
    }

    button {
      background-color: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #06c;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .btn-icon {
    font-size: 20px;
  }

  .pricing-wrapper {
    margin-top: 15px;
  }

  @media only screen and (max-width: 735px) {
    height: 540px;
  }

  @media only screen and (max-width: 600px) {
    .heading {
      font-size: 32px;
    }

    .info {
      font-size: 19px;
      margin-top: 5px;
    }

    .pricing {
      font-size: 14px;
      width: 190px;
      &:last-child {
        margin-top: 5px;
      }

      &-wrapper {
        margin-top: 5px;
      }
    }

    .button-wrapper {
      button {
        font-size: 17px;
      }
    }
  }
`;
const ShopOnline = styled.div`
  width: 100vw;
  height: 48px;
  max-height: 44px;
  position: absolute;
  top: 0;
  background-color: #f5f5f7;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.25px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.47059;
  padding: 10px 20px;

  span {
    color: #06c;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 600px) {
    min-height: 68px;
  }
`;
