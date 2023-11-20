import "./Header.scss";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const goToBlogs = (): any => {
    navigate("/blogs");
  };

  const goToProjects = (): any => {
    navigate("/projects");
  };

  const goToHome = (): any => {
    navigate("/");
  };

  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <span className="blogs-link" onClick={goToBlogs}>
          Blogs
        </span>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="nav_header">
        <div className="header__logo-box">
          <span className="header__logo" onClick={goToHome}>
            DineSh SanaLa
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
