"use client";
import { useRouter } from "next/router";
import "./Header.scss";

const Header = () => {
  const router = useRouter();

  const goToBlogs = (): any => {
    router.push("/blogs");
  };

  const goToProjects = (): any => {
    router.push("/projects");
  };

  const goToHome = (): any => {
    router.push("/");
  };

  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        {/* <span className="blogs-link" onClick={goToBlogs}> */}
        <span className="blogs-link">Blogs</span>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Projects
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Articles
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="nav_header">
        <div className="header__logo-box">
          <span className="header__logo" onClick={goToHome}>
            Dhinesh Sanala
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
