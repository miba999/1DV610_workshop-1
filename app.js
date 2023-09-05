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
    <div id="t1-1" class="tile"></div>
    <div id="t1-2" class="tile"></div>
    <div id="t1-3" class="tile"></div>
    <div id="t2-1" class="tile"></div>
    <div id="t2-2" class="tile"></div>
    <div id="t2-3" class="tile"></div>
    <div id="t3-1" class="tile"></div>
    <div id="t3-2" class="tile"></div>
    <div id="t3-3" class="tile"></div>
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

      this.board = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ]

      this.turn = 1
      this.gameOver = false

      const firstTile = this.shadowRoot.querySelector('#t1-1');
      const secondTile = this.shadowRoot.querySelector('#t1-2');
      const thirdTile = this.shadowRoot.querySelector('#t1-3');
      const fourthTile = this.shadowRoot.querySelector('#t2-1');
      const fifthTile = this.shadowRoot.querySelector('#t2-2');
      const sixthTile = this.shadowRoot.querySelector('#t2-3');
      const seventhTile = this.shadowRoot.querySelector('#t3-1');
      const eightTile = this.shadowRoot.querySelector('#t3-2');
      const ninthTile = this.shadowRoot.querySelector('#t3-3');

      firstTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          firstTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          firstTile.style.backgroundColor = 'green';
          this.turn = 1
        }

        
      });

      secondTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          secondTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          secondTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      thirdTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          thirdTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          thirdTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      fourthTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          fourthTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          fourthTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      fifthTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          fifthTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          fifthTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      sixthTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          sixthTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          sixthTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      seventhTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          seventhTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          seventhTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      eightTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          eightTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          eightTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });

      ninthTile.addEventListener('click', (event) => {
        if (this.turn === 1) {
          ninthTile.style.backgroundColor = 'red';
          this.turn = 0
        } else {
          ninthTile.style.backgroundColor = 'green';
          this.turn = 1
        }
      });
    }
  }
);
