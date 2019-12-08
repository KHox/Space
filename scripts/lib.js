const G = 6.67408e-11;
const SCALE = 3e5;
const SCL = 3e5 / SCALE;
const SHIFTX = 0;
const SHIFTY = 0;
const SPEED = 2592;

function renderVectors(f, a, v, coords) {
  frc.style.top = coords[1] / 3e5 + f[1] / 1e20 - 2.5 + 'px';
  frc.style.left = coords[0] / 3e5 + f[0] / 1e20 - 2.5 + 'px';
  acc.style.top = coords[1] / 3e5 + a[1] * 1e3 - 2.5 + 'px';
  acc.style.left = coords[0] / 3e5 + a[0] * 1e3 - 2.5 + 'px';
  sp.style.top = coords[1] / 3e5 + v[1] / 1e2 - 2.5 + 'px';
  sp.style.left = coords[0] / 3e5 + v[0] / 1e2 - 2.5 + 'px';
}