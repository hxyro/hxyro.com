import ProjectCard from "../ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="projects section is-medium">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="columns">

          <div className="column is-multiline is-6">
            <ProjectCard username="hxyro" repository="rcli" />
            <ProjectCard username="hxyro" repository="webpai-app" />
            <ProjectCard username="hxyro" repository="modifier" />
          </div>

          <div className="column is-multiline is-6">
            <ProjectCard username="hxyro" repository="Xconfig" />
            <ProjectCard username="hxyro" repository="terra-vpn" />
          </div>
        </div>
        {/* <h1>Commissions</h1> */}
        {/* <div className="columns"> */}
        {/* 	<div className="column is-full"> */}
        {/* 		<p */}
        {/* 			style={{ */}
        {/* 				textAlign: "center", */}
        {/* 				fontSize: "1.2rem" */}
        {/* 			}} */}
        {/* 		> */}
        {/* 			Hm. Well, this is awkward. There seems nothing in here. */}
        {/* 			<br /> */}
        {/* 			You can always commission me by clicking{" "} */}
        {/* 			<a href="http://ko-fi.com/janleigh/commissions">here</a>. */}
        {/* 		</p> */}
        {/* 	</div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Projects;
