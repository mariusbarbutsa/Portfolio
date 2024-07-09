export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
          <nav class="navbar" tabindex="0">
        <a href="#home" onclick="scrollToTop()" class="nav-logo">
          <img class="logo_mariussart" alt="logo" src="images/mariussart_logotype.svg" />
        </a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#myprojects" class="nav-link active" onclick="scrollToTop()">
              My Projects
              <span class="project-count">06</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#shootings" id="projects-active" class="nav-link" onclick="scrollToTop()">Shootings</a>
          </li>
          <li class="nav-item">
            <a target="_blank" href="https://drive.google.com/file/d/11o2WWTHp6SguaE1AiXJKq5j4RFl1RWNo/view?usp=sharing" class="nav-link">Resume</a>
          </li>
          <li class="nav-item">
            <a target="_blank" href="https://www.linkedin.com/in/your-profile" class="nav-link active-link">
              <img class="linkedin_icon" alt="LinkedIn logo" src="images/icons/connect.png" />LinkedIn
            </a>
          </li>
        </ul>
        <div class="hamburger">
          <div class="hamburger-tab">
            <span class="hamburger-switch">Menu</span>
          </div>
          <div class="hamburger-screen">
            <div class="hamburger-container">
              <li class="hamburger-menulist">
                <a href="#home" class="hamburger-nav-link" onclick="scrollToTop()">Home</a>
                <a href="#myprojects" class="hamburger-nav-link" onclick="scrollToTop()">
                My Projects
                <span class="hamburger-project-count">06</span>
                </a>
                <a href="#shootings" class="hamburger-nav-link" onclick="scrollToTop()">Shootings</a>
                <a target="_blank" href="https://drive.google.com/file/d/11o2WWTHp6SguaE1AiXJKq5j4RFl1RWNo/view?usp=sharing" class="hamburger-nav-link">Resume</a>
              </li>
              <p class="hamburger-motto">less is moreeee,<br> 
                <span class="underline">lines are sleek</span>,<br>
                <span class="tiny">tiny</span> details make it <i>chic</i>.
              </p>

              <div class="position-hamburger-footer-projects">
                <div class="line"></div>
                <div class="hamburger-footer-links">
                  <div class="hamburger-social-links" style="width: 100%">
                    <a href="https://www.instagram.com/xalerotdeenem/">Instagram <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="https://www.linkedin.com/in/marius-barbuta/">LinkedIn <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="https://www.facebook.com/marius.barbutsa">Facebook <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
              </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    `;
  }
}
