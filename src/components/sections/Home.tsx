import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section id="home" className="introduction section is-medium">
      <div className="introduction-container container">
        <div className="columns">
          <div className="column is-12">
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
              <div className="content" style={{ textAlign: "center" }}>
                <h1 className="title"><span className="blue-text">@Hxyro</span></h1>
                {/* <p className="description">Up & Running</p> */}
                <p className="description">DevSecOps ° Linux ° Open-source ° Vim ° Rust</p>
                <Link to="about" smooth={true} className="button">
                  View More
                  <span>→</span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
