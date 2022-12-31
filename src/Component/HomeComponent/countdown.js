import "./countdown.css";
import React, { Fragment } from "react";
const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
      <p className="begin">The fest begin in..</p>
        <section className="timer">
          <div className="uppertime">
            <section className="days">
              <p>{timerDays}</p>
              <p className="day">DAYs</p>
            </section>
            </div>
            <div className="lowertime">
            <section className="hr">
              <p>{timerHours}</p>
              <p>HRs</p>
            </section>
            <section className="min">
              <p>{timerMinutes}</p>
              <p>MINs</p>
            </section>
            <section className="sec">
              <p>{timerSeconds}</p>
              <p>SECs</p>
            </section>
            </div>
        </section>
      </section>
    </Fragment>
  );
};
Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds : 10,
};
export default Clock;
