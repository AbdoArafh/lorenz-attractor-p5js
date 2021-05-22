class Point {
    constructor() {
      this.state = createVector(1, 1, 1);
      this.Xchange = this.Xchange.bind(this);
      this.Ychange = this.Ychange.bind(this);
      this.Zchange = this.Zchange.bind(this);
      this.update = this.update.bind(this);
    }
  
    Xchange(x, y, z) {
      return (segma * (y - x)) * dt;
    }
  
    Ychange(x, y, z) {
      return (x * (rho - z) - y) * dt;
    }
  
    Zchange(x, y, z) {
      return (x * y - beta * z) * dt;
    }
  
    update(x, y, z) {
      this.state.set(
        p5.Vector.add(
          createVector(x, y, z),
          createVector(this.Xchange(x, y, z),
                       this.Ychange(x, y, z),
                       this.Zchange(x, y, z))
        )
      );
    }
  }
  