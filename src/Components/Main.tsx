import AuthorName from "./AuthorName";
import NavBar from "./NavBar";
const Main: React.FC = () => {
  return (
    <body>
      <div className="landing">
        {/* <img className="landing-image" src="Images/IMG_1024.jpg" /> */}

        {/* <div className="centered"> */}
        <AuthorName color={"whitesmoke"} />
        <NavBar />
        {/* <div className="author">Author</div> */}
        {/* </div> */}
      </div>
    </body>
  );
};
export default Main;
