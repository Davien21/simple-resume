import Head from "next/head";

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
          <div className="name-div mt-2">
            <span className="">{"I'm "}</span>
            <b className="name">Chidiebere Ekennia</b>
          </div>
        </header>
        <div className="role">
          <p className="m-0 title">A Software Developer from Imo, Nigeria.</p>
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
    </>
  );
}
