import AuthorName from "./AuthorName";
import NavBar from "./NavBar";
const Main: React.FC = () => {
  return (
    <body>
      <div className="landing">
        <AuthorName color={"whitesmoke"} />
        <NavBar />
      </div>
    </body>
  );
};
export default Main;
