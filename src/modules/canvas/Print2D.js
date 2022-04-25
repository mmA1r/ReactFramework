class Print2D{
    constructor({ WIN, canvas }) {
        this.WIN = WIN;
        this.canvas = canvas;
    }
    printXY () {
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
            this.canvas.line (i, BOTTOM + LEFT, i, HEIGHT + BOTTOM,'black', 0.3);
        }
        for(let i = 0; i < HEIGHT + LEFT - BOTTOM + WIDTH; i++) {
            this.canvas.line (i, BOTTOM, i, 0,'black', 0.3);
        }
        for(let i = 0; i < HEIGHT + LEFT + BOTTOM + WIDTH; i++) {
            this.canvas.line (i, 0, i, HEIGHT + BOTTOM,'black', 0.3);
            this.canvas.line (LEFT, i, HEIGHT + LEFT, i, 'black', 0.3);
        }
        for(let i = 0; i > BOTTOM; i --) {
            this.canvas.line (LEFT + BOTTOM, i, WIDTH + LEFT, i, 'black', 0.3);
        }
        for(let i = 0; i < HEIGHT - LEFT + BOTTOM + WIDTH; i ++) {
            this.canvas.line (LEFT, i, 0, i, 'black', 0.3);
        }
    }
}

export default Print2D;