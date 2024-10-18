import React from 'react';
import './ChargingStation.css';

function ChargingStation() {
  return (
    <div className="charging-station-container">
     
      <div className="machine-container">
        <div className="charging-machine">
          <h3>Machine 1</h3>
          <div className="slot-buttons">
            <button className="btn btn-outline-success">10:00 AM</button>
            <button className="btn btn-outline-success">11:00 AM</button>
            <button className="btn btn-outline-success">12:00 PM</button>
            <button className="btn btn-outline-success">01:00 PM</button>
            <button className="btn btn-outline-success">02:00 PM</button>
            <button className="btn btn-outline-success">03:00 PM</button>
            <button className="btn btn-outline-success">04:00 PM</button>
            <button className="btn btn-outline-success">05:00 PM</button>
            <button className="btn btn-outline-success">06:00 PM</button>
            <button className="btn btn-outline-success">07:00 PM</button>
            <button className="btn btn-outline-success">08:00 PM</button>
            <button className="btn btn-outline-success">09:00 PM</button>
          </div>
        </div>
        <div className='vertical-line'></div>
        <div className="charging-machine">
          <h3>Machine 2</h3>
          <div className="slot-buttons">
            <button className="btn btn-outline-success">10:00 AM</button>
            <button className="btn btn-outline-success">11:00 AM</button>
            <button className="btn btn-outline-success">12:00 PM</button>
            <button className="btn btn-outline-success">01:00 PM</button>
            <button className="btn btn-outline-success">02:00 PM</button>
            <button className="btn btn-outline-success">03:00 PM</button>
            <button className="btn btn-outline-success">10:00 AM</button>
            <button className="btn btn-outline-success">11:00 AM</button>
            <button className="btn btn-outline-success">12:00 PM</button>
            <button className="btn btn-outline-success">01:00 PM</button>
            <button className="btn btn-outline-success">02:00 PM</button>
            <button className="btn btn-outline-success">03:00 PM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChargingStation;
