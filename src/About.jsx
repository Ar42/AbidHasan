import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/sw.jpg";
import { Common } from "./Common";

const About = () => {
  return (
    <>
      <div className="container-fluid aboutBody">
        <div className="aboutIntro">
          <p>
            I am Abid Hasan. I am a student of Software Engineering at Shahjalal
            University of Science & Technology since Feb 21, 2018. <br /> I have
            worked on <strong>Web Development</strong> and
            <strong> Competetive Programming</strong>. But I am strongly
            interested in <strong>Web Development</strong> since i have started
            working in it. <br /> <br /> Here I have shown about my skills and
            workings. <br />
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 familiarWith">
            <h3><strong> Familiar with </strong></h3>
            <ul>
              <li className="familiarWithLi">C++, C, Java, JavaScript</li>
              <li className="familiarWithLi">HTML, CSS, ReactJS, NodeJS</li>
              <li className="familiarWithLi">PHP ,MySQL</li>
              <li className="familiarWithLi">Git & Github</li>
              <li className="familiarWithLi">Competitive Programming</li>
            </ul>
          </div>
          <div className="col-lg-4 col-12 viewProjects">
            <h3><strong>View Projects </strong></h3>
            <ul>
              <li>
                <a
                  href="https://github.com/Ar42/Blood-Search"
                  target="_/"
                  className="rtd1"
                >
                  Blood Search
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ar42/Project350-EventManagementSystem-"
                  target="j"
                  className="rtd1"
                >
                  Event Management System
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ar42/AbidHasan"
                  target="l"
                  className="rtd1"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ar42/AbidHasan"
                  target="l"
                  className="rtd1"
                >
                  The Extreme Fighter
                </a>
              </li>
            </ul>
          </div>
        
        
          <div className="col-lg-4 col-12  viewMyProfile">
            <h3><strong>View My Profiles </strong></h3>
            <ul>
              <li>
                <a href="https://github.com/Ar42" target="l" className="rtd">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://codeforces.com/profile/DJ_Ar"
                  target="o"
                  className="rtd"
                >
                  CodeForces
                </a>
              </li>
              <li>
                <a
                  href="https://vjudge.net/user/ar_nob364"
                  target="i"
                  className="rtd"
                >
                  VJudge
                </a>
              </li>
            </ul>
          </div>
          </div>

        <div class="socialMedia">
          <p class="follow text-center font-weight-bold ">
            Follow me on social media
          </p>

          <div class="social-media d-flex justify-content-center">
            <a href="https://www.facebook.com/ar.nob.9256/" target="_p">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/ar_nobbb?utm_medium=copy_link" target="_p">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/ArNob72012335?s=07" target="_p">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com/channel/UC3wefKCKerHsxtpRZo6JUxg" target="_p">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export { About };
