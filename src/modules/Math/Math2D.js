class Math2D {
constructor({WIN, canvas}) {
    this.WIN = WIN;
    this.canvas = canvas;
}

getDerivative(f, x0, dx = 0.00001) { return(f(x0 + dx) - f(x0)) / dx; }

printTangent(f, x0) {
    const k = this.getDerivative(f, x0);
    let b = f(x0) - k * x0;
    let x1 = this.WIN.LEFT;
    let x2 = this.WIN.LEFT + this.WIN.WIDTH;
    let y = k * x1 + b;
    let y2 = k * x2 + b;
    this.canvas.line(x1, y, x2, y2, 'black', 1, (9, 5));
}

getIntegral(f, a, b, n = 100) {
    const dx = (b - a) / n;
    let x = a;
    let s = 0;
    while (x < b) {
    s +=  ((f(x) + f(x + dx)) / 2) * dx;
    x += dx
    }
    return s;
}

getZero(f, a, b, eps) {
    if (f(a) * f(b) > 0) {
        return null;
    }
    if (Math.abs(f(a) - f(b)) <= eps) {
        return (a + b) / 2;
    }
    var half = (a + b) / 2
    if (f(a) * f(half) <= 0) {
        return this.getZero(f, a, half, eps);
    }
    if ((f(half) * f(b)) <= 0) {
        return this.getZero(f, half, b, eps);
    }
}

getCross(f, g, a, b, eps) {
    if ((f(a) - g(a)) * (f(b) - g(b)) > 0) {
        return null;
    }
    if (Math.abs(f(a) - g(a)) <= eps) {
        return a
    }
    var half = (a + b) / 2
    if ((f(a) - g(a)) * (f(half) - g(half)) <= 0) {
        return this.getCross(f, g, a, half, eps);
    }
    if ((f(half) - g(half)) * (f(b) - g(b)) <= 0) {
        return this.getCross(f, g, half, b, eps);
    }
}

printIntegral(f, a, b, n = 100) {
    const dx = (b - a) / n;
    let x = a;
    const points = [];
    points.push({x, y: 0});
    while(x < b) {
      points.push({x, y: f(x)});
      x += dx;
    }
    points.push({x: b, y: 0});
    this.canvas.polygon(points, 'rgba(255, 60, 135, 0.5)');
}

printXY () { //yaeh.... It`s not Math...
    const { LEFT, BOTTOM, WIDTH, HEIGHT } = this.WIN;
    //XY
    this.canvas.line(0, BOTTOM,0, HEIGHT + BOTTOM,'black');
    this.canvas.line(LEFT, 0, WIDTH + LEFT, 0,'black');
    //Arrows
    this.canvas.line(WIDTH + LEFT, 0, WIDTH + LEFT - 0.4, 0.15,'black', 1.5);
    this.canvas.line(WIDTH + LEFT, 0, WIDTH + LEFT - 0.4, -0.15,'black', 1.5);
    this.canvas.line(0, HEIGHT + BOTTOM,-0.15, HEIGHT + BOTTOM - 0.4,'black', 1.5);
    this.canvas.line(0, HEIGHT + BOTTOM, 0.15, HEIGHT + BOTTOM - 0.4,'black', 1.5);
    //Text
    this.canvas.text('0', 0.5, -0.7);
    this.canvas.text('1', 1, 1);
    this.canvas.text('-1', -1, -1);
    this.canvas.text('x', WIDTH + LEFT - 0.4, -0.5);
    this.canvas.text('y', 0.5, HEIGHT + BOTTOM - 1);
    //Lines
    for(let i = 0; i < HEIGHT + BOTTOM; i ++) {
        this.canvas.line (-0.2, i, 0.2, i, 'black', 1);
    }
    for(let i = 0; i > BOTTOM; i --) {
        this.canvas.line (-0.2, i, 0.2, i, 'black', 1);
    }
    for(let i = 0; i < WIDTH + LEFT; i ++) {
        this.canvas.line (i, -0.2, i, 0.2, 'black', 1);
    }
    for(let i = 0; i > LEFT; i --) {
        this.canvas.line(i, -0.2, i, 0.2,'black', 1);
    }
    //Net
    for(let i = 0; i > LEFT; i --){
        this.canvas.line (i, BOTTOM + LEFT, i, HEIGHT + BOTTOM,'black', 0.2);
    }
    for(let i = 0; i < HEIGHT + LEFT - BOTTOM + WIDTH; i++) {
        this.canvas.line (i, BOTTOM, i, 0,'black', 0.2);
    }
    for(let i = 0; i < HEIGHT + LEFT + BOTTOM + WIDTH; i++) {
        this.canvas.line (i, 0, i, HEIGHT + BOTTOM,'black', 0.2);
        this.canvas.line (LEFT, i, HEIGHT + LEFT, i, 'black', 0.2);
    }
    for(let i = 0; i > BOTTOM; i --) {
        this.canvas.line (LEFT + BOTTOM, i, WIDTH + LEFT, i, 'black', 0.2);
    }
    for(let i = 0; i < HEIGHT - LEFT + BOTTOM + WIDTH; i ++) {
        this.canvas.line (LEFT, i, 0, i, 'black', 0.2);
    }
}

}
  
export default Math2D;