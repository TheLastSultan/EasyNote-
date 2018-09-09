import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import LogInFormContainer from '../session_form/login_container'

class Home extends React.Component {
  render() {
    const splashMessages = "An Easy Way to Keep Track of Your Amazing Ideas";
    const messages = "Manage and organize your notes, thoughts, and ideas in one easy place with EasyNote."
    const copyrightMessages = "2018 EasyNote";
    return (
      <div className="home-page">
        <div className="nav-bar-area">
          <NavBarContainer />
        </div>
        <div className="home-body-area">
          <section className="section-left">
            <LogInFormContainer />
          </section>
          <section className="section-right">
            <div className="splash-area">
              <h3>{splashMessages}</h3>
              <p>{messages}</p>
            </div>
          </section>
        </div>
        <div className="footer-area">
          <footer>{copyrightMessages}</footer>
        </div>
      </div>
    )
  }
}

export default Home;
