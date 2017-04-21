import { addClass, removeClass } from './helpers';

export default {
  install(Vue) {
    Vue.directive('tooltip', {
      bind(el, bindings) {
        let div = document.createElement('DIV');
        let text = document.createTextNode(`Seats avaiable: ${bindings.value.seats}`);
        div.appendChild(text);
        addClass(div, 'tooltip');
        el.appendChild(div);
        let className = 'tooltip-show';
        el.addEventListener('mouseover', () => {
          addClass(div, className);
        });
        el.addEventListener('mouseout', () => {
          removeClass(div, className);
        });
        el.addEventListener('touchstart', () => {
          addClass(div, className);
        });
        el.addEventListener('touchend', () => {
          removeClass(div, className);
        });
      }
    });
  }
}
