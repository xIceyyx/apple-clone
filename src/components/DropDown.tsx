import React from "react";
import styled from "styled-components";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface Props {
  title: string;

  content: string[];
}

const DropDown = (props: Props) => {
  return (
    <MobileLinks>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="title">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content">
            <ul>
              {props.content.map((x: string) => (
                <li>{x}</li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </MobileLinks>
  );
};

export default DropDown;

const MobileLinks = styled.div`
  .accordion {
    background-color: #f5f5f7;
    box-shadow: none;
    border-bottom: 1px solid #d2d2d7;
    .title {
      font-size: 12.5px;
    }

    .content {
      font-size: 12px;
    }

    ul {
      padding-left: 10px;
      transform: translateY(-13.5px);
      display: flex;
      flex-direction: column;
      gap: 7.5px;
      li {
        list-style-type: none;
        color: #86868b;
      }
    }
  }
 // display: none;

  @media only screen and (min-width: 1050px) {
    display: none;
  }
`;
