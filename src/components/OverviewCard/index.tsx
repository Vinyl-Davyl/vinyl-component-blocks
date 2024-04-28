import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

type props = {
  percentageText: string;
  percentage: number;
};

export const OverviewCard: React.FC<props> = (props) => {
  return (
    <div>
      <div className="single-transaction-card">
        <TransactionGroup className="">
          <CircularProgressGroup>
            {/* <div style={{ width:100, height:100}}> */}
            <div className="circle-progress">
              <CircularProgressbar
                value={props.percentage}
                text={`${props.percentage}`}
                styles={buildStyles({
                  pathColor: "#0b4d81",
                  textColor: "#0b4d81",
                })}
              />
            </div>
          </CircularProgressGroup>
          <p className="transaction-text">{props.percentageText}</p>
        </TransactionGroup>
      </div>
    </div>
  );
};

const TransactionGroup = styled.div`
  display: flex;
  clear: both;
`;

const CircularProgressGroup = styled.div``;
