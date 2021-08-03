import NavBar from "./NavBar";
const About: React.FC = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="image-container">
        <img className="banner-image" src="Images/Banner-high res-3.jpg" />
      </div> */}
      <div className="text">
        <div className="copy">
          Welcome! My name is Brianna and I live in British Columbia, Canada.
          I'm the author of two hi-lo novels, <em>Avalanche</em> and{" "}
          <em>Summer Camp</em>.
        </div>
      </div>
    </div>
  );
};
export default About;
