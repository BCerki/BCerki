import NavBar from "./NavBar";
import AuthorName from "./AuthorName";
import Contact from "./Contact";
import Banner from "./Banner";
const About: React.FC = () => {
  return (
    <div className="column about">
      <AuthorName color={"black"} />
      <NavBar />
      <Banner />
      <div className="bio">
        <p>
          Welcome! My name is Brianna and I live in British Columbia, Canada.
          I'm the author of two hi-lo novels, <em>Avalanche</em> and{" "}
          <em>Summer Camp</em>.
        </p>
        <p>
          I love hearing from readers! If you'd like to get in touch, feel free
          to send me an <a href="mailto:brianna.cerkiewicz@gmail.com">email</a>.
        </p>
      </div>
      <div className="credits">
        <p className="credits">© 2020 by Brianna Cerkiewicz</p>

        <p className="credits">
          Photos by Coast Academy of Dance (headshot), Daria Shevtsova (cabins),
          Ylanite Koppens (lavender), Cerkiewicz family (all others)
        </p>
      </div>
    </div>
  );
};
export default About;
