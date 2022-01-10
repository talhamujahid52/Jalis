import React from "react";
import {
  ReportsWrapper,
  ReportHeadingText,
  StatsWrapper,
  StatRow,
  RevenueWrapper,
} from "./Reports.style";
import { Revenue } from "../../settings/constant";
import { useHistory } from "react-router-dom";
const Reports = () => {
  const history = useHistory();
  return (
    <ReportsWrapper>
      <ReportHeadingText>Reports</ReportHeadingText>
      <p style={{ color: "#A5A5A5" }}>Check your performance reports</p>
      <StatsWrapper>
        <h2
          style={{
            margin: "0px",
            fontWeight: "bold",
            paddingBottom: "30px",
            borderBottom: "2px solid #F8F9FA",
          }}
        >
          Stats For this week
        </h2>
        <StatRow>
          <p style={{ color: "#ADADAD", fontWeight: "bold", margin: "0px" }}>
            Views Per Resort
          </p>
          <p style={{ color: "#000000", fontWeight: "bold", margin: "0px" }}>
            55
          </p>
        </StatRow>
        <StatRow>
          <p style={{ color: "#ADADAD", fontWeight: "bold", margin: "0px" }}>
            Views Per Section
          </p>
          <p style={{ color: "#000000", fontWeight: "bold", margin: "0px" }}>
            55
          </p>
        </StatRow>
        <StatRow>
          <p style={{ color: "#ADADAD", fontWeight: "bold", margin: "0px" }}>
            Impressions
          </p>
          <p style={{ color: "#000000", fontWeight: "bold", margin: "0px" }}>
            55
          </p>
        </StatRow>
        <StatRow>
          <p style={{ color: "#ADADAD", fontWeight: "bold", margin: "0px" }}>
            Number of Bookings
          </p>
          <p style={{ color: "#000000", fontWeight: "bold", margin: "0px" }}>
            55
          </p>
        </StatRow>
        <StatRow>
          <p style={{ color: "#ADADAD", fontWeight: "bold", margin: "0px" }}>
            Saved
          </p>
          <p style={{ color: "#000000", fontWeight: "bold", margin: "0px" }}>
            55
          </p>
        </StatRow>
      </StatsWrapper>
      <RevenueWrapper
        onClick={() => {
          history.push(Revenue);
        }}
      >
        <p
          style={{
            color: "white",
            margin: "0px",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Revenue
        </p>
      </RevenueWrapper>
    </ReportsWrapper>
  );
};

export default Reports;
