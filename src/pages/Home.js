import React from "react";
import "../App.css";
import {
  FaSearch,
  FaBell,
  FaUserAlt,
  FaStar,
  FaEyeSlash,
  FaGitAlt,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="form-head">
        <div className="search margin">
          <FaSearch />
        </div>
        <form className="form margin">
          <input type="text" name="text" />
        </form>
        <div className="bell margin">
          <FaBell />
        </div>
        <div className="user margin">
          <FaUserAlt />
        </div>
        <div className="user-name margin">UserName</div>
      </div>

      <div className="content">
        <div className="wrapper">
          <h2>Your Active Projects</h2>
          <section className="columns">
            <div className="column column2">
              <div>
                <h4>Project 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="bottom-icons">
                  <FaStar />
                  <span>
                    <FaEyeSlash />
                  </span>
                  <FaGitAlt />
                </div>
              </div>
            </div>
            <div className="column column2">
              <div>
                <h4>Project 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bottom-icons">
                <FaStar />
                <span>
                  <FaEyeSlash />
                </span>
                <FaGitAlt />
              </div>
            </div>
          </section>
        </div>

        <div className="wrapper">
          <h2>Current Open Internship</h2>
          <section className="columns">
            <div className="column column2">
              <div>
                <h4>Internship 1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bottom-icons">
                <FaStar />
                <span>
                  <FaEyeSlash />
                </span>
                <FaGitAlt />
              </div>
            </div>
            <div className="column column2">
              <div>
                <h4>Internship 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bottom-icons">
                <FaStar />
                <span>
                  <FaEyeSlash />
                </span>
                <FaGitAlt />
              </div>
            </div>
          </section>
        </div>

        <div className="wrapper">
          <h2>Your Role And Permissions</h2>
          <section className="columns">
            <div className="column column2">
              <div>
                <h4>Role</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bottom-icons">
                <FaStar />
                <span>
                  <FaEyeSlash />
                </span>
                <FaGitAlt />
              </div>
            </div>
            <div className="column column2">
              <div>
                <h4>Permission</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bottom-icons">
                <FaStar />
                <span>
                  <FaEyeSlash />
                </span>
                <FaGitAlt />
              </div>
            </div>
          </section>
        </div>

        <div className="wrapper-2">
          <h2>Announcements</h2>
          <aside className="columns">
            <div className="column column2">
              <div>
                <h4>Site Maintainance</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <hr />
                <h4>Community Share Day</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <hr />
                <h4>Updated Privacy Policy</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
