class Space {
  constructor(elem) {
    this.elem = elem;
    elem.classList.add('space');
    this._spaceObj = [];
  }

  addPlanet(planet, x, y, options = {}) {
    this.elem.append(planet.elem);
    this._spaceObj.push(planet);
    planet.moveble = options.moveble;
    planet.moveTo(x, y);
  }

  createPlanet(planetParams, x, y, options) {
    let planet = new Planet(...planetParams);
    this.addPlanet(planet, x, y, options);
  }

  stepByTime(time, n) {
    let t = time / n;
    this._spaceObj.forEach(elem => {
      if (elem.moveble) {
        for (let i = 0; i < n; i++) {
          this._stepPlanetByTime(elem, t);
        }
        elem.step();
        elem.render();
      }
    });
  }

  _stepPlanetByTime(planet, t) {
    let f = [0, 0];

    this._spaceObj.forEach(obj => {
      if (planet != obj) {
        let force = planet.getForce(obj);
        f[0] += force[0];
        f[1] += force[1];
      }
    });

    let a = planet.getA(f);
    let x = planet.x + t * (planet.speedX + a[0] * t / 2);
    let y = planet.y + t * (planet.speedY + a[1] * t / 2);
    planet.moveTo(x / SCALE, y / SCALE);
    planet.speedTo(planet.speedX + a[0] * t, planet.speedY + a[1] * t);
    renderVectors(f, a, [planet.speedX, planet.speedY], [planet.x, planet.y]);
  }
}