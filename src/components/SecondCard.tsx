import React from "react";
import styled from "styled-components";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface Props {
  heading: string;

  infoActive: boolean;
  info: string;

  buttonOneActive: boolean;
  buttonTwoActive: boolean;
  buttonOne: string;
  buttonTwo: string;

  backgroundImg: string;
  mobileBackGroundImg: string;
}

const SecondCard = (props: Props) => {
  const Background = styled.div`
    background-image: url(${props.backgroundImg});

    z-index: 1;
    position: absolute;
    border: 0;
    margin: 0;
    padding: 0;
    left: calc(50% + 0px);
    right: auto;
    bottom: 0px;
    top: auto;
    transform: translatex(-50%);

    width: 1262px;
    height: 580px;
    background-size: 1262px 580px;
    background-repeat: no-repeat;
    z-index: -1;

    @media only screen and (max-width: 810px) {
      transform: translateX(-50%) scale(1) translateY(1.75%);
      background-image: url(${props.mobileBackGroundImg});
      width: 736px;
      height: 548px;
      background-size: 736px 548px;
      background-repeat: no-repeat;
      z-index: 1;
      position: absolute;
      border: 0;
      margin: 0;
      padding: 0;
      left: calc(50% + 0px);
      right: auto;
      bottom: 0px;
      top: auto;
      -webkit-transform: translatex(-50%);
      z-index: -1;
    }
  `;

  return (
    <Wrapper>
      <h2 className="heading">{props.heading}</h2>
      {props.infoActive && <p className="info">{props.info}</p>}

      <div className="buttons">
        <div className="button-wrapper">
          {props.buttonOneActive && (
            <button>
              {props.buttonOne} <ChevronRightIcon className="btn-icon" />
            </button>
          )}
        </div>

        <div className="button-wrapper">
          {props.buttonTwoActive && (
            <button style={{ marginLeft: "35px" }}>
              {props.buttonTwo} <ChevronRightIcon className="btn-icon" />
            </button>
          )}
        </div>
      </div>
      <Background />
    </Wrapper>
  );
};

export default SecondCard;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  height: 580px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .heading {
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0em;
    margin-top: 53px;
    max-width: 550px;
    text-align: center;
    letter-spacing: 0.002em;
  }

  .info {
    font-size: 21px;
    line-height: 1.2381;
    font-weight: 400;
    letter-spacing: 0.016em;
    margin-top: 6px;
    max-width: 360px;
    text-align: center;
    position: relative;
    z-index: 10;
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

    button {
      background-color: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #06c;
      cursor: pointer;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .heading {
      font-size: 32px;
    }

    .info {
      font-size: 19px;

      max-width: 309px;
    }
  }

  @media only screen and (max-width: 900px) {
    .heading {
      padding: 0;
    }
  }

  @media only screen and (max-width: 810px) {
    height: 540px;
    .heading {
      width: 300px;
    }
  }
`;
