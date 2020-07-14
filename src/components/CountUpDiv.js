import React from "react";
import CountUp from "react-countup";

const CountUpDiv = () => {
  return (
    <>
      <div className="count-up">
        <div className="count-up-center">
          <div className="count-up-container">
            <CountUp start={0} end={9762} duration={12} delay={0}>
              {({ countUpRef }) => {
                return (
                  <div className="count-up-card">
                    <div className="count-up-fig">
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
            <CountUp start={0} end={1250} duration={8} delay={0}>
              {({ countUpRef }) => {
                return (
                  <div className="count-up-card">
                    <div className="count-up-fig">
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

            <CountUp start={0} end={600} duration={5} delay={0}>
              {({ countUpRef }) => {
                return (
                  <div className="count-up-card">
                    <div className="count-up-fig">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CountUpDiv;
