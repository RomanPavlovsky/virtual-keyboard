export default class LayoutView {
  constructor() {
    this.renderLayout();
    this.monitorButton = document.querySelector('.monitor__button-wrapper');
    this.monitorLight = document.querySelector('.monitor__light');
    this.monitorOff = document.querySelector('.monitor_off');
    this.monitorOn = document.querySelector('.monitor_on');
    this.mouse = document.querySelector('.mouse__left');
    this.isScreen = false;
    this.toggleMonitor = this.toggleMonitor.bind(this);
    this.toggleMonitor();
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    this.monitorButton.addEventListener('click', this.toggleMonitor);
  }
  renderLayout() {
    document.body.innerHTML = `<section class="section-up">
    <div class="speakers">
      <div class="speakers__panel">
      </div>
      <div class="speakers__footer"></div>
    </div>
    <div class="monitor">
      <div class="monitor__wrapper">
        <div class="monitor__container">
          <textarea class="textarea" cols="15" rows="10"></textarea>
          <div class="monitor_off"></div>
          <div class="monitor_on"></div>
          <div class="os-info">
            Windows OS
          </div>
          <div class="monitor__light monitor__light_active"></div>
          <div class="monitor__button-wrapper">
            <div class="monitor__button"></div>
          </div>
        </div>
      </div>
      <div class="monitor__footer"></div>
    </div>
    <div class="speakers">
      <div class="speakers__panel">
        <div class="speakers__light speakers__light_inactive"></div>
        <div class="speakers__power speakers__power_inactive"></div>
      </div>
      <div class="speakers__footer"></div>
    </div>
    </section>
    <section class="section-down">
      <div class="keyboard">
        <div class="keyboard__wrapper"></div>
      </div>
      <div class="mouse">
        <div class="mouse__buttons">
        <div class="mouse__left"></div>
        <div class="mouse__middle"></div>
        <div class="mouse__right"></div>
      </div>
      </div>
    </section>`;
  }
  toggleMonitor() {
    if (!this.isMonitor) {
      this.monitorButton.removeEventListener('click', this.toggleMonitor);
      this.isMonitor = true;
      this.monitorLight.classList.replace(
        'monitor__light_inactive',
        'monitor__light_active'
      );
      this.monitorOn.style.display = 'block';
      this.monitorOn.addEventListener('animationend', () => {
        this.monitorButton.addEventListener('click', this.toggleMonitor);
        this.monitorOff.style.display = 'none';
        this.monitorOn.style.display = 'none';
      });
    } else {
      this.isMonitor = false;
      this.monitorLight.classList.replace(
        'monitor__light_active',
        'monitor__light_inactive'
      );
      this.monitorOff.style.display = 'block';
    }
  }
  toggleMouse() {
    this.mouse.classList.toggle('mouse__left_active');
  }
}
