class SpaceObject {
  _speed = [0, 0];
  constructor(mass, radius, color) {
    let elem = document.createElement('div');
    let r = radius / SCALE;
    elem.className = 'space-object';
    elem.style.backgroundColor = color;
    elem.style.width = `${r * 2}px`;
    elem.style.height = `${r * 2}px`;
    elem.style.borderRadius = `${r}px`;

    this.elem = elem;
    this.r = r;
    this.mass = mass;
    this.color = color;
  }

  moveTo(x, y) {
    this._x = x * SCALE;
    this._y = y * SCALE;
  }

  render() {
    this.elem.style.top = this._y * (SCL / SCALE) - this.r + SHIFTY + 'px';
    this.elem.style.left = this._x * (SCL / SCALE) - this.r + SHIFTX + 'px';
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  getDistanse(spaceObj) {
    let dx = this.x - spaceObj.x;
    let dy = this.y - spaceObj.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  getForce(spaceObj) {
    let r = this.getDistanse(spaceObj);
    let force = G * this.mass * spaceObj.mass / (r * r);
    let fx = force * (spaceObj.x - this.x) / r;
    let fy = force * (spaceObj.y - this.y) / r;
    return [fx, fy];
  }

  speedTo(x, y) {
    this._speed = [x, y];
  }

  get speedX() {
    return this._speed[0];
  }

  get speedY() {
    return this._speed[1];
  }

  getA(f) {
    return [f[0] / this.mass, f[1] / this.mass];
  }

  step() {
    let x = this.x * (SCL / SCALE);
    let y = this.y * (SCL / SCALE);
    new Step(this.elem.parentElement, x, y, this.color);
  }
}