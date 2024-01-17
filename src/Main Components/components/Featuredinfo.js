import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Featuredinfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,542</span>
          <span className="featuredMoneyRate">
            -10.5 <ArrowDownward className="featuredIcon"/>
          </span>
        </div>
        <div className="featuredSub"><p>Compared to last month</p></div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,542</span>
          <span className="featuredMoneyRate">
            -1.5 <ArrowDownward className="featuredIcon"/>
          </span>
        </div>
        <div className="featuredSub"><p>Compared to last month</p></div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,542</span>
          <span className="featuredMoneyRate">
            2.5 <ArrowUpward className="featuredIconUp" />
          </span>
        </div>
        <div className="featuredSub"><p>Compared to last month</p></div>
      </div>
    </div>
  );
};

export default Featuredinfo;
