import React from "react";
import { BodyBox } from "./Services.st";


const Services = () => {
  return (
    <BodyBox>
      <div className="widgets">
        <div className="widget-box-1">
          <div className="box1-top">Header</div>
          <div className="box1-bottom">
            Body
            Body
            Body
            Body
            Body
          </div>
        </div>
        <div className="widget-box-2">Widget 2</div>
        <div className="widget-box-3">Widget 3</div>
        <div className="widget-box-4">Widget 4</div>
        <div className="widget-box-5">Widget 5</div>
        <div className="widget-box-6">Widget 6</div>
        <div className="widget-box-7">Widget 7</div>
        <div className="widget-box-8">Widget 8</div>
      </div>
      <div className="sidebar">SideBar</div>
    </BodyBox>
  );
};

export default Services;