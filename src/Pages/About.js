import React from "react";
import { DaulColor, maxWidth, GradientCircle } from "../CSS/VariableCSS";
import SectionDivider from "../SmallComponents/SectionDivider";
import SectionTitle from "../SmallComponents/SectionTitle";
import AboutDataWeDo, {
  AboutDataTitleDescription,
  AboutDataSingleAbout,
  AboutDataWeDoDescription,
} from "../Json/AboutData";
import styled from "styled-components";
import WeGotBadges from "../SmallComponents/WeGotBadges";

function AboutSingle(Props) {
  const SingleAbout = styled.div`
    padding: 40px 16px 27px;
    transition: all 0.3s ease 0s;
    position: relative;
    z-index: 1;

    &:before {
      border-left: 1px solid #16a2e8;
      border-right: 1px solid #16a2e8;
      transform: scaleY(0);
      transform-origin: 100% 0 0;
      z-index: -1;
    }

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: all 0.5s ease 0s;
    }

    &:hover:before {
      transform: scaleY(1);
      opacity: 1;
    }

    :after {
      border-bottom: 1px solid #16a2e8;
      border-top: 1px solid #16a2e8;
      transform: scaleX(0);
      transform-origin: 0 100% 0;
      z-index: -1;
    }

    &:hover:after {
      transform: scaleX(1);
      opacity: 1;
    }
  `;

  return (
    <>
      <div className="col-md-4 col-sm-4">
        <SingleAbout className="single_about">
          <div className="about_icon" style={GradientCircle}>
            <i className={Props.icon} />
          </div>
          <div className="about_content">
            <h6 className="text-center mt-3 fw-bold text-dark">
              {Props.aboutContent}
            </h6>
            <p className="text-center mt-3">{Props.aboutContentDescription}</p>
          </div>
        </SingleAbout>
      </div>
    </>
  );
}

function WeDo(Props) {
  const Technology = styled.div`
    margin-bottom: 2rem;

    img {
      width: 45px;
      height: 45px;
      object-fit: contain;
    }

    &:hover p {
      color: rgb(46, 100, 171);
    }
  `;

  return (
    <>
      <div className="col-md-2 col-sm-3 col-xs-6">
        <Technology className="technology text-center">
          <a href="/" className="text-decoration-none text-dark">
            <img
              className="tach_icon"
              alt={Props.Alt}
              loading="lazy"
              src={Props.image}
            />
            <p className="mt-1 mb-0">
              <strong>{Props.Alt}</strong>
            </p>
          </a>
        </Technology>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="About mt-5">
        <div className="container pb-5">
          <div className="">
            <SectionTitle
              Before="Trusted"
              After="Partner"
              DaulColor={DaulColor}
            />
            <SectionDivider />
            <div className="mt-4 text-center">
              <p className="" style={maxWidth}>
                {AboutDataTitleDescription.titleDescription}
              </p>
              <p className="mt-3">
                {AboutDataTitleDescription.titleDescriptionSmall}
              </p>
            </div>
          </div>

          <div className="row mt-5">
            {AboutDataSingleAbout.map((value, index) => (
              <AboutSingle
                key={index}
                icon={value.aboutIcon}
                aboutContent={value.title}
                aboutContentDescription={value.description}
              />
            ))}
          </div>
        </div>

        <div className="bg-light pb-5">
          <div className="container">
            <div className="We_do pt-5">
              <SectionTitle Before="We" After="Do" DaulColor={DaulColor} />
              <SectionDivider />
              <div className="mt-4 text-center">
                <p className="">{AboutDataWeDoDescription}</p>
              </div>
              <div className="mt-4">
                <div className="row bg-white p-3 pt-5">
                  {AboutDataWeDo.map((value, index) => (
                    <WeDo key={index} Alt={value.name} image={value.image} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <WeGotBadges />
      </div>
    </>
  );
}

export default About;
