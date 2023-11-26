"use client";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import "./Skills.scss";

function Skills() {
  return (
    <div className="section3">
      <div className="container">
        <div className="col">
          <h2 className="titulo">Front End</h2>
          <ul className="skill">
            <li>
              <span className="blueline css"></span>
              <em>JavaSCript</em>
            </li>
            <li>
              <span className="blueline html"></span>
              <em>React</em>
            </li>
            <li>
              <span className="blueline php"></span>
              <em>Redux</em>
            </li>
            <li>
              <span className="blueline css"></span>
              <em>React Query</em>
            </li>
            <li>
              <span className="blueline css"></span>
              <em>GraphQL</em>
            </li>
            <li>
              <span className="blueline php"></span>
              <em>NextJS</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="plataformas titulo">Back End</h2>
          <ul className="skill">
            <li>
              <span className="greenline wordpress"></span>
              <em>NodeJS</em>
            </li>
            <li>
              <span className="greenline wordpress"></span>
              <em>Express</em>
            </li>
            <li>
              <span className="greenline wordpress"></span>
              <em>Micro Services</em>
            </li>
            <li>
              <span className="greenline blogger"></span>
              <em>RabbitMQ</em>
            </li>
            <li>
              <span className="greenline wordpress"></span>
              <em>MongoDB</em>
            </li>
            <li>
              <span className="greenline joomla"></span>
              <em>PostgreSQL</em>
            </li>
            
            
          </ul>
        </div>
        <div className="col">
          <h2 className="programas titulo">Dev Ops</h2>
          <ul className="skill">
            <li>
              <span className="redline dreamweaver"></span>
              <em>Docker</em>
            </li>
            <li>
              <span className="redline dreamweaver"></span>
              <em>Kubernetes</em>
            </li>
            <li>
              <span className="redline photoshop"></span>
              <em>AWS</em>
            </li>
            <li>
              <span className="redline premiere"></span>
              <em>Ansible</em>
            </li>
            <li>
              <span className="redline flash"></span>
              <em>Logstash</em>
            </li>
            <li>
              <span className="redline premiere"></span>
              <em>Prometheus</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
