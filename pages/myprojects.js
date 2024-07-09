export default class MyProjects {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="myprojects" class="page">
      
        <div class="list-container">
          <hr class="projects-line">
          <a href="#gogetgreen" class="list-element" data-images="images/project/project04/GoGetGreen_Slider_01.jpg, images/project/project04/GoGetGreen_Slider_02.jpg, images/project/project04/GoGetGreen_Slider_03.jpg, images/project/project04/GoGetGreen_Slider_04.jpg, images/project/project04/GoGetGreen_Slider_05.jpg">
            <div class="text-box">
              <div class="text-element list-header-text">GoGetGreen app
                <span class="list-small-text">/ 01</span>
              </div>
              <div class="text-element list-small-text">Mobile App Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#sunglassesconcept" class="list-element" data-images="images/project/project03/SunglassesConcept_Slider_06.jpg, images/project/project03/SunglassesConcept_Slider_02.jpg, images/project/project03/SunglassesConcept_Slider_03.jpg, images/project/project03/SunglassesConcept_Slider_04.jpg, images/project/project03/SunglassesConcept_Slider_07.jpg">
            <div class="text-box">
              <div class="text-element list-header-text">Sunglasses concept Design
                <span class="list-small-text">/ 02</span>
              </div>
              <div class="text-element list-small-text">Product Design & 3D Printing</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#babysam" class="list-element" data-images="images/project/project05/BabySam_Slider_01.jpg, images/project/project05/BabySam_Slider_02.jpg, images/project/project05/BabySam_Slider_03.jpg, images/project/project05/BabySam_Slider_04.jpg, images/project/project05/BabySam_Slider_05.jpg">
            <div class="text-box">
              <div class="text-element list-header-text">Baby Sam App
                <span class="list-small-text">/ 03</span>
              </div>
              <div class="text-element list-small-text">Mobile App Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#jobportal" class="list-element" data-images="images/project/project01/Jobportal_Slider_01.jpg, images/project/project01/Jobportal_Slider_02.jpg, images/project/project01/Jobportal_Slider_03.jpg, images/project/project01/Jobportal_Slider_04.jpg, images/project/project01/Jobportal_Slider_05.jpg">
            <div class="text-box">
              <div class="text-element list-header-text">BAAA Job Portal
                <span class="list-small-text">/ 04</span>
              </div>
              <div class="text-element list-small-text">UX/UI Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#advchallenge" class="list-element" data-images="images/project/project06/TheAdvChallenge_Slider_01.jpg,images/project/project06/TheAdvChallenge_Slider_02.jpg, images/project/project06/TheAdvChallenge_Slider_03.jpg, images/project/project06/TheAdvChallenge_Slider_04.jpg, images/project/project06/TheAdvChallenge_Slider_05.jpg">
            <div class="text-box">
              <div class="text-element list-header-text">The Adventure Challenge App
                <span class="list-small-text">/ 05</span>
              </div>
              <div class="text-element list-small-text">Mobile App Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#thesis" class="list-element" data-images="images/project/project02/EntrSoftware_Slider_01.jpg,images/project/project02/EntrSoftware_Slider_02.jpg,images/project/project02/EntrSoftware_Slider_03.jpg,images/project/project02/EntrSoftware_Slider_04.jpg,images/project/project02/EntrSoftware_Slider_05.jpg">
            <div class="text-box">
              <div class="text-element list-header-text">Enterprise Software Redesign
                <span class="list-small-text">/ 06</span>
              </div>
              <div class="text-element list-small-text">UX/UI Design</div>
            </div>
          </a>
          <hr class="projects-line">
        </div>

        <div class="position-footer-projects">
          <div class="hamburger-footer-links">
            <div class="hamburger-social-links">
              <a href="#">Instagram <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
              <a href="#">LinkedIn <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
              <a href="#">Facebook <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
            </div>
            <div class="footer-credits myproject-footer-hide">
              <p>&copy; 2024 MARIUSSART<br>Designed and developed <br>with &#9829; by Marius Barbuţa</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
