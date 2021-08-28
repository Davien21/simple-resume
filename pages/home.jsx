import Head from "next/head";
import Image from "next/image";
import ExternalLink from "../components/ExternalLink";
import RightUpImage from "../components/icons/rightUp";
import { techStackIcon, chidi } from "../images";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chidebere | About</title>
        <meta
          name="description"
          content="Hello, My name is Chidiebere Ekennia and I am a Software Developer. This is a simple portfolio website I made so you can learn more about me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="intro">
        <header>
          <p className="m-0 title">Hi there 👋</p>
          <h1 className="name-div mt-2">
            <span className="">{"I'm "}</span>
            <b className="name">Chidiebere Ekennia</b>
          </h1>
        </header>
        <div className="role">
          <h2 className="m-0 title">A Software Developer from Imo, Nigeria.</h2>
        </div>
        <div className="profile-image position-relative text-cente">
          <img alt="" width={2592} height={1728} src={chidi} />
        </div>
        <div className="short-description">
          <p>
            I love to build beautiful and highly performant applications /
            interfaces using whatever tools are needed. In my free time, I love
            listening to music or playing chess 😊.
          </p>
          <p>{"I'm "} currently open to new remote or contract roles.</p>
        </div>
      </section>
      <section id="tech-stack">
        <header className="d-flex mb-3 align-items-center">
          <Image
            alt=""
            src={techStackIcon}
            width={30}
            height={30}
            className="col-auto"
          />

          <p className="title mb-0 col-auto">Tech Stack</p>
        </header>
        <div className="stack row">
          <div className="tools mt-3 col-auto px-2">
            <div>HTML, CSS, Javascript</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Reactjs</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Redux</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Socket.io</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Nextjs</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Nodejs</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Expressjs</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Bootstrap</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Framer-motion</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Redis</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>MongoDB</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>GraphQL</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>SQL</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>ChakraUI</div>
          </div>
          <div className="tools mt-3 col-auto px-2">
            <div>Tailwind</div>
          </div>
        </div>
      </section>
      <section className="">
        <ExternalLink
          href="https://docs.google.com/document/d/1mOgn7CP1zsRRNLGc2eRUn_b_cvmVIi1FAbnlrVT9Pns/edit?usp=sharing"
          className="article-title"
        >
          <span className="pr-3">Check out my project catalog:</span>

          <RightUpImage />
        </ExternalLink>
      </section>
    </>
  );
}
