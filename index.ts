// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Access Modifiers in Constructor Parameters</h1>
  <p>You can remove the filters and assign private to the constructor and
  typescript would automatically generate the values for each parameter</p>
`;

class Point {
  constructor(private x?: number, public y?: number) { //with 'private' x cannot be accessed but y(because it is "public") can be accessed in line 104

  }

  draw() {
    console.log('X: ' + this.x + ', ' + 'Y: ' + this.y)
  }
}

let point = new Point(1, 2);
point.y
point.draw()