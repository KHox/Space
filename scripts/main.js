let acc = document.querySelector('.blue');
let frc = document.querySelector('.red');
let sp = document.querySelector('.green');



let spaceElem = document.querySelector('#space');
let space = new Space(spaceElem);

let star = new Planet('Star', 5.972e24, 6.371e6, 'rgb(242, 255, 0)');
space.addPlanet(star, 400, 400);
star.render();

let moon = new Planet('Moon', 7.36e22, 1.7371e6, '#a1a294');
space.addPlanet(moon, 400, 200, {
  moveble: true
});

moon.speedTo(SPEED, 0);

let moon2 = new Planet('Moon2', 7.36e22, 1.7371e6, 'rgb(249, 51, 51)');
space.addPlanet(moon2, 400, 600, {
  moveble: true
});

moon2.speedTo(-SPEED, 0);

let moon3 = new Planet('Moon3', 7.36e22, 1.7371e6, '#08b5ff');
space.addPlanet(moon3, 200, 400, {
  moveble: true
});

moon3.speedTo(0, -SPEED);

let moon4 = new Planet('Moon4', 7.36e22, 1.7371e6, 'rgb(8, 227, 63)');
space.addPlanet(moon4, 600, 400, {
  moveble: true
});

moon4.speedTo(0, SPEED);

/*let mars = new Planet('Mars', 6.39e23, 3.3895e6, 'rgb(138, 30, 16)')
space.addPlanet(mars, 200, 300, {
  moveble: true
});
mars.speedTo(2200, -2200);*/

setInterval(() => space.stepByTime(300, 300), 12);