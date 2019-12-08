class Planet extends SpaceObject {
  constructor(name, mass, radius, color) {
    super(mass, radius, color);
    this.name = name;
  }
}