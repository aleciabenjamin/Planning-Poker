import React from "react";
import { Card as BSCard, Col } from "react-bootstrap";
import One from "assets/pokerCards/1-Low hanging fruit.svg";
import Two from "assets/pokerCards/2-Piece of cake.svg";
import Three from "assets/pokerCards/3-It ain't rocket science.svg";
import Five from "assets/pokerCards/5-Ornitorinco.svg";
import Eight from "assets/pokerCards/8-An arm and a leg.svg";
import Thirteen from "assets/pokerCards/13-Squeaking by.svg";
import Twenty from "assets/pokerCards/20-Don't put all.svg";
import Forty from "assets/pokerCards/40-Meterse en un berenjenal.svg";
import Hundred from "assets/pokerCards/100-Monster task.svg";
import QuestionMark from "assets/pokerCards/question-Here be dragons.svg";
import Infinity from "assets/pokerCards/∞-When pigs Fly.svg";
import xsmall from "assets/pokerCards/xs-Eat a brownie.svg";
import small from "assets/pokerCards/sm-Yak Shaving.svg";
import medium from "assets/pokerCards/md-Coffee break.svg";
import large from "assets/pokerCards/lg-Eat a brownie.svg";
import xlarge from "assets/pokerCards/xl-Yak Shaving.svg";
import xxlarge from "assets/pokerCards/xxl-Coffee break.svg";

const CardMapping = {
  "1": One,
  "2": Two,
  "3": Three,
  "5": Five,
  "8": Eight,
  "13": Thirteen,
  "20": Twenty,
  "40": Forty,
  "100": Hundred,
  "?": QuestionMark,
  "?": Infinity,
  xs: xsmall,
  sm: small,
  md: medium,
  lg: large,
  xl: xlarge,
  xxl: xxlarge,
};

const Card = ({ value, handleClick }) => {
  if (value && CardMapping[value.toString()])
    return (
      <Col sm="3" className="text-center mb-2">
        <BSCard>
          <BSCard.Body
            className="p-0 cursor-pointer"
            onClick={() => handleClick(value)}
          >
            <img src={CardMapping[value]} alt="value" />
          </BSCard.Body>
        </BSCard>
      </Col>
    );
  else return <></>;
};

export default Card;
