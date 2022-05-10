import React from "react";
import Canvas from "../../modules/canvas/Canvas";
import Math2D from "../../modules/Math/Math2D";
import UI from "../UI/UI";

import './graph2D.css'

class Graph2D extends React.Component {
    constructor(props) {
        super(props);
        this.WIN = {
            LEFT: -15,
            BOTTOM: -15,
            WIDTH: 30,
            HEIGHT: 30
        };

        this.funcs = [];
        this.derevativeX = 0;
        this.canMove = false;
    }

    componentDidMount() {
        this.canvas = new Canvas({
            id: 'graph2DCanvas',
            WIN: this.WIN,
        });
        this.math = new Math2D({
            WIN: this.WIN,
            canvas: this.canvas
        });
        const animLoop = () => {
            this.run();
            window.requestAnimFrame(animLoop);
        }
        animLoop();
    }

    mouseMove(e) {
        if (this.canMove) {
          this.WIN.LEFT -= this.canvas.sx(e.nativeEvent.movementX);
          this.WIN.BOTTOM -= this.canvas.sy(e.nativeEvent.movementY);
        }
        this.derevativeX = this.WIN.LEFT + this.canvas.sx(e.nativeEvent.offsetX);
        this.run();
    }

    wheel(e) {
        let delta = e.deltaY > 0 ? -0.3 : +0.3
        if(this.WIN.BOTTOM + delta < -6) {
          this.WIN.WIDTH -= delta
          this.WIN.HEIGHT -= delta
          this.WIN.LEFT += delta / 2
          this.WIN.BOTTOM += delta / 2
        }
        this.run();
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

    printFunction(f, color, width) {
        let x = this.WIN.LEFT;
        const dx = this.WIN.WIDTH / 1000;
        while (x < this.WIN.LEFT + this.WIN.WIDTH) {
            this.canvas.line(x, f(x), x + dx, f(x + dx), color, width);
            x += dx;
        }
    }

    run() {
        this.canvas.resize();
        this.canvas.transparentClear();
        this.printXY();
        //functions
        this.funcs.forEach(f => {
            if (f) {
                this.printFunction(f.f, f.color, f.width);
            }
        });
        //Derivative
        this.funcs.forEach(f => {
            if (f && f.isDerivative) {
                this.math.printTangent(f.f, this.derevativeX);
            }
        });
        //Integral
        this.funcs.forEach(f => {
            if(f) {
                this.math.printIntegral(f.f, f.sLine - 0, f.eLine - 0)
            }
        });
        //GetZero
        this.funcs.forEach(f => {
            if(f) {
                let xZero = this.math.getZero(f.f, f.sLine - 0, f.eLine - 0, 0.00001);
                if(f.sLine < f.eLine) {
                    this.canvas.line(f.sLine, 0, f.eLine, 0, 'orange', 2);
                    if(
                        xZero != null &&
                        xZero >= f.sLine &&
                        xZero <= f.eLine
                    ) { this.canvas.point(xZero, 0); };
                }
            }
        });
    }

    render() {
        return (
            <div className = "graph2D">
                <UI
                    name = "graph2D"
                    funcs = { this.funcs }
                    run2D = {() => this.run()}
                ></UI>
                <canvas 
                    className = "canvas2D"
                    id = "graph2DCanvas"
                    onMouseDown = {() => this.canMove = true}
                    onMouseUp = {() => this.canMove = false}
                    onMouseLeave = {() => this.canMove = false}
                    onMouseMove = {(e) => this.mouseMove(e)}
                    onWheel = {(e) => this.wheel(e)}
                ></canvas>
            </div>
        );
    }
}

export default Graph2D;