import React, { LegacyRef, useEffect, useRef, useState } from "react";
import "./PrevWorks.scss";

function PrevWorks() {
  return (
    <div className="section2">
      <div className="row">
        <div className="col-1-of-2 margin-0">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  SOLVE <br />A CRIME
                </span>
              </h4>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Technologies</p>
                  <p className="card__price-value">ReactJS, Redux, NextJS..</p>
                </div>
                <button className="button">View All Details!</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  CyGlass
                </span>
              </h4>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Technologies</p>
                  <p className="card__price-value">
                    ReactJS, Remix, Styled Components..
                  </p>
                </div>
                <button className="button">View All Details!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1-of-2 margin-0">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  Mind
                  <br />
                  Spark
                </span>
              </h4>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Technologies</p>
                  <p className="card__price-value">
                    Angular, Redux, TypeScript
                  </p>
                </div>
                <button className="button">View All Details!</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--4">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  GoGoAds
                </span>
              </h4>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Technologies</p>
                  <p className="card__price-value">
                    Angular, Material UI, ProgressiveWebApp..
                  </p>
                </div>
                <button className="button">View All Details!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevWorks;
