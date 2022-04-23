class Canvas {
    constructor({ id, WIN, width = 300, height = 300 }) {
        this.WIN = WIN;
        this.canvas = document.getElementById(id);
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
    }

    xs (x) {
        return this.canvas.width * (x - this.WIN.LEFT) / this.WIN.WIDTH;
    }

    ys (y) {
        return this.canvas.height - (this.canvas.height * (y - this.WIN.BOTTOM) / this.WIN.HEIGHT);
    }

    clear() {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    line (x1, y1, x2, y2, colour = 'red', width = 2, isDash) {
        this.context.beginPath();
        this.context.strokeStyle = colour;
        this.context.lineWidth = width;
        this.context.setLineDash([isDash ? isDash : '']);
        this.context.moveTo(this.xs(x1), this.ys(y1));
        this.context.lineTo(this.xs(x2), this.ys(y2));
        this.context.stroke();
    }
}

export default Canvas;