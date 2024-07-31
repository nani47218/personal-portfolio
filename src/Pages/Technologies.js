import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    python,
    pandas,
    numpy,
    seaborn,
    scikitlearn,
    tableau,
    sql,
    r,
    msexcel,
    html,
    css,
    js,
    react,
    tailwind,
    vscode,
    git
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-light-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={python} title="python" alt=""/>
        <img src={sql} title="SQL" alt="SQL"/>
        <img src={r} title="R" alt="R"/>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-light-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools/Platforms
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={pandas} title="pandas" alt="pandas"/>
        <img src={numpy} title="numpy" alt="numpy"/>
        <img src={seaborn} title="seaborn" alt="seaborn"/>
        <img src={scikitlearn} title="scikitlearn" alt="scikitlearn"/>
        <img src={tableau} title="tableau" alt="tableau"/>
        <img src={msexcel} title="MsExcel" alt="msexcel"/>
      </section>
    </main>
  );
}

export default Technologies;
