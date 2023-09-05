/**
 * The my-app web component module.
 *
 * @author Max Granberg <mg224em@student.lnu.se>
 * @author Miranda Bånnsgård <>
 * @version 1.0.0
 */

// Define template
const template = document.createElement('template');
template.innerHTML = `
  <style>
    #gameboard {
      height: 600px;
      width: 600px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .tile{
      border: 1px solid black;
      height: 200px;
      width: 200px;
    }

  </style>
  <div id="gameboard">  
    <div id="t11" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
    <div id="" class="tile"></div>
  </div>
`;

customElements.define(
  'my-app',
  /**
   * Represents a my-app element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super();

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      );

      const tile = this.shadowRoot.querySelector('#t11');

      tile.addEventListener('click', (event) => {
        tile.style.backgroundColor = 'red';
      });
    }
  }
);
