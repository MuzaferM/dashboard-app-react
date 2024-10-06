// src/components/Overview.js
import React from "react";
import "./Overview.scss";
import { OVERVIEW_DATA } from "../../constants/constants";

const Overview = () => {
  return (
    <>
    <div className="overview-wrapper">
        <h3 className="overview-header">Overview</h3>
        <select>
          <option>Last week</option>
          <option>This week</option>
        </select>
      </div>

      <div className="overview">
        <div className="overview-card">
          <h2>Total Revenue</h2>
          <div className="value">{OVERVIEW_DATA.totalRevenue}</div>
          <div className="change-wrapper">
            <span className={"positive"}>
              {OVERVIEW_DATA.totalRevenueChange}
            </span>{" "}
            from last week
          </div>
        </div>
        <div className="overview-card">
          <h2>Average Order Value</h2>
          <div className="value">{OVERVIEW_DATA.avgOrderValue}</div>
          <div className="change-wrapper">
            <span className={"negative"}>
              {OVERVIEW_DATA.avgOrderValueChange}
            </span>{" "}
            from last week
          </div>
        </div>
        <div className="overview-card">
          <h2>Tickets Sold</h2>
          <div className="value">{OVERVIEW_DATA.ticketsSold}</div>
          <div className="change-wrapper">
            <span className={"positive"}>
              {OVERVIEW_DATA.ticketsSoldChange}
            </span>{" "}
            from last week
          </div>
        </div>
        <div className="overview-card">
          <h2>Pageviews</h2>
          <div className="value">{OVERVIEW_DATA.pageViews}</div>
          <div className="change-wrapper">
            <span className={"positive"}>{OVERVIEW_DATA.pageViewsChange}</span>{" "}
            from last week
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
