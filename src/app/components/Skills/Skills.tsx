import React, { LegacyRef, useEffect, useRef, useState } from "react";
import "./Skills.scss";

function Skills() {
  return (
    <div className="section3">
      <div className="container">
        <div className="col">
          <h2 className="titulo">Languages</h2>
          <ul className="skill">
            <li>
              <span className="blueline html"></span>
              <em>HTML</em>
            </li>
            <li>
              <span className="blueline css"></span>
              <em>CSS</em>
            </li>
            <li>
              <span className="blueline php"></span>
              <em>PHP</em>
            </li>
            <li>
              <span className="blueline javascript"></span>
              <em>Javascript</em>
            </li>
            <li>
              <span className="blueline jquery"></span>
              <em>jQuery</em>
            </li>
            <li>
              <span className="blueline jquery"></span>
              <em>ReactJS</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="plataformas titulo">Frameworks</h2>
          <ul className="skill">
            <li>
              <span className="greenline wordpress"></span>
              <em>Wordpress</em>
            </li>
            <li>
              <span className="greenline prestashop"></span>
              <em>Prestashop</em>
            </li>
            <li>
              <span className="greenline joomla"></span>
              <em>Joomla</em>
            </li>
            <li>
              <span className="greenline blogger"></span>
              <em>Blogger</em>
            </li>
            <li>
              <span className="greenline tridion"></span>
              <em>Tridion</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="programas titulo">Libraries</h2>
          <ul className="skill">
            <li>
              <span className="redline dreamweaver"></span>
              <em>Dreamweaver</em>
            </li>
            <li>
              <span className="redline illustrator"></span>
              <em>Illustrator</em>
            </li>
            <li>
              <span className="redline photoshop"></span>
              <em>Photoshop</em>
            </li>
            <li>
              <span className="redline premiere"></span>
              <em>Premiere</em>
            </li>
            <li>
              <span className="redline flash"></span>
              <em>Flash</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
