import React, { useState } from "react";
import { softwareIcon } from "../images";
import Image from "next/image";
import Head from "next/head";
import SegmentedControl from "../components/segmentedControl";
import WorkProjects from "../components/workProjects";

function WorkPage() {
  const [projectTypes] = useState(["All", "Live", "Pet", "Food", "Die"]);
  const [activeControl, setActiveControl] = useState(projectTypes[0]);

  return (
    <>
      <Head>
        <title>Chidebere | Work Projects</title>
        <meta
          name="description"
          content="Hello, My name is Chidiebere Ekennia and I am a Software Developer. Here are some software projects I have worked."
        />
        <link rel="icon" href="/software-2.png" />
      </Head>
      <section id="experience-intro">
        <div className="row align-items-center">
          <div className="col-auto">
            <Image alt="" src={softwareIcon} width={40} height={40} />
          </div>
          <div className="col-auto px-0">
            <p className="title m-0 semi-bold">Projects</p>
          </div>
          <div className="col-12 col-lg-auto my-2 ml-auto">
            <SegmentedControl
              active={activeControl}
              controls={projectTypes}
              onSetActiveControl={setActiveControl}
            />
          </div>
        </div>
      </section>
      <section id="projects">
        <WorkProjects
          activeType={activeControl}
          defaultType={projectTypes[0]}
        />
      </section>
    </>
  );
}

export default WorkPage;
