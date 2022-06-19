import React from "react";
import Image from "next/image";
import { experienceIcon } from "../images";
import ExternalLink from "./../components/ExternalLink";
import RightUpImage from "./../components/icons/rightUp";
import Head from "next/head";

function Experience() {
  return (
    <>
      <Head>
        <title>Chidebere | Experience</title>
        <meta
          name="description"
          content="Hello, My name is Chidiebere Ekennia and I am a Software Developer. This is a simple portfolio website I made so you can learn more about me"
        />
        <meta name="keywords" content="Chidiebere Ekennia, Chidiebere, Chidi, Ekennia"></meta>
        <link rel="icon" href="/software-2.png" />
      </Head>
      <section id="experience-intro">
        <div className="row align-items-center">
          <div className="col-auto">
            <Image alt="" src={experienceIcon} width={40} height={40} />
          </div>
          <div className="col-auto px-0">
            <p className="title m-0 semi-bold">Work Experience</p>
          </div>
        </div>
      </section>
      <section id="work-timeline" className="mt-4 px-2">
      <article className="timeline-item">
          <header>
            <ExternalLink href="https://www.buildspace.africa/" className="article-title">
              <span className="">Buildspace Africa,</span>
              <span className="pl-2 pr-3 location">Nigeria</span>
              <RightUpImage />
            </ExternalLink>
            <div className="meta-info row mt-1">
              <span className="col-auto pr-2 role">Volunteer,</span>
              <span className="col-auto period">January 2022 — Present</span>
            </div>
          </header>
          <ul className="description">
            <li>
              Actively building a Web3 Community in Africa with the Buildspace Team.
            </li>
          </ul>
        </article>
      <article className="timeline-item">
          <header>
            <ExternalLink href="https://www.blockchainhubafrica.com" className="article-title">
              <span className="">Blockchain Hub Africa,</span>
              <span className="pl-2 pr-3 location">Nigeria</span>
              <RightUpImage />
            </ExternalLink>
            <div className="meta-info row mt-1">
              <span className="col-auto pr-2 role">Assistant C.T.O,</span>
              <span className="col-auto period">July 2021 — Present</span>
            </div>
          </header>
          <ul className="description">
            <li>
              Building Web3 Solutions and startups in Africa.
            </li>
            <li>Supervising core development and processes across all applications</li>
          </ul>
        </article>
        <article className="timeline-item">
          <header>
            <ExternalLink href="https://mojay.com" className="article-title">
              <span className="">Mojay Global Holding Limited,</span>
              <span className="pl-2 pr-3 location">Dubai</span>
              <RightUpImage />
            </ExternalLink>
            <div className="meta-info row mt-1">
              <span className="col-auto pr-2 role">Software developer,</span>
              <span className="col-auto period">May 2021 — November 2021</span>
            </div>
          </header>
          <ul className="description">
            <li>
              Leading a team of developers and designers to develop websites and
              applications for the company and {"it's"} many businesses.
            </li>
            <li>Working to rebuild the company brand Identity. </li>
          </ul>
        </article>
        <article className="timeline-item">
          <header>
            <ExternalLink
              href="https://genesystechhub.com"
              className="article-title"
            >
              <span className="">Genesys Tech Hub,</span>
              <span className="pl-2 pr-3 location">Nigeria</span>

              <RightUpImage />
            </ExternalLink>
            <div className="meta-info row mt-1">
              <span className="col-auto pr-2 role">Software developer,</span>
              <span className="col-auto period">March 2021 — November 2021</span>
            </div>
          </header>
          <ul className="description">
            <li>
              Supervising a sub-team of developers to deliver products and APIs.
            </li>
            <li>
              Developing websites for startups and businesses that are incubated
              by the company.
            </li>
            <li>
              Revamping and upgrading existing products, websites and
              applications to embrace modern trends.
            </li>
          </ul>
          <p className="description"></p>
        </article>
        <article className="timeline-item">
          <header>
            <ExternalLink href="https://upwork.com" className="article-title">
              <span className="">Upwork,</span>
              <span className="pl-2 pr-3 location">USA</span>

              <RightUpImage />
            </ExternalLink>
            <div className="meta-info row mt-1">
              <span className="col-auto pr-2 role">
                Freelance Software developer,
              </span>
              <span className="col-auto period">July 2020 — Present</span>
            </div>
          </header>
          <ul className="description">
            <li>Developing websites for businesses and companies</li>
            <li>Fixing bugs, and solving problems for happy clients.</li>
            <li>
              Improving user experience on applications for interested clients
            </li>
          </ul>
          <p className="description"></p>
        </article>
        <article className="timeline-item">
          <header>
            <ExternalLink
              href="https://oluakainstitute.edu.ng"
              className="article-title"
            >
              <span className="">Oluaka Institute,</span>
              <span className="pl-2 pr-3 location">Nigeria</span>

              <RightUpImage />
            </ExternalLink>
            <div className="meta-info row mt-1">
              <span className="col-auto pr-2 role">
                Junior Fullstack developer,
              </span>
              <span className="col-auto period">June 2018 — June 2020</span>
            </div>
          </header>
          <ul className="description">
            <li>Developed websites to raise revenue for the company.</li>
            <li>
              Worked with a team to build and maintain websites and applications
              for the Imo State Government
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default Experience;
