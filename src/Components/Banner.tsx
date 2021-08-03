import { useLocation } from "react-router";
const Banner: React.FC = () => {
  const location = useLocation();

  const bannerClass =
    location.pathname === "/" ? "banner-image" : "banner-image-opaque";

  return (
    <div className="image-container">
      {/* <img className="banner-image" src="Images/IMG_1024 Copy.jpg" /> */}
      <img className={bannerClass} src="Images/Banner-high res-3.jpg" />
      <div className="centered">
        <div>
          <span className="brianna">{location.pathname.replace("/", "")}</span>
        </div>
        {/* <div className="author">Author</div> */}
      </div>
    </div>
  );
};
export default Banner;
