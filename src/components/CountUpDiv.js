import React from "react";
import CountUp from "react-countup";

const CountUpDiv = () => {
  return (
    <>
      <div className="count-up">
        <div className="count-up-center">
          <div className="count-up-container">
            {/* <div className="count-up-card"> */}
            <CountUp start={0} end={10000} duration={11} delay={0}>
              {({ countUpRef }) => {
                return (
                  <div className="count-up-card">
                    <div>
                      <p ref={countUpRef} />
                      <p>+</p>
                    </div>
                    <div>
                      <small>customers engaged</small>
                    </div>
                  </div>
                );
              }}
            </CountUp>
            <CountUp start={0} end={1250} duration={10} delay={0}>
              {({ countUpRef }) => {
                return (
                  <div className="count-up-card">
                    <div>
                      <p ref={countUpRef} />
                      <p>+</p>
                    </div>
                    <div>
                      <small>daily customers</small>
                    </div>
                  </div>
                );
              }}
            </CountUp>
            <CountUp start={0} end={600} duration={8} delay={0}>
              {({ countUpRef }) => {
                return (
                  <div className="count-up-card">
                    <div>
                      <p ref={countUpRef} />
                      <p>+</p>
                    </div>
                    <div>
                      <small>happy customers</small>
                    </div>
                  </div>
                );
              }}
            </CountUp>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountUpDiv;
