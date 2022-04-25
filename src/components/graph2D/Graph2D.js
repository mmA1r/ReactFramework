import React from "react";
import Canvas from "../../modules/canvas/Canvas";
import Math2D from "../../modules/Math/Math2D";
import UI from "./ui/UI";

class Graph2D extends React.Component {
    constructor(props) {
        super(props);
        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20
        };
        this.funcs = [];
        this.state = { funcsLength: this.funcs.length };
        this.derevativeX = 0;
        this.canMove = false;
    }

    componentDidMount() {
        this.canvas = new Canvas({
            id: 'graph2DCanvas',
            WIN: this.WIN,
            height: 700,
            width: 700
        });
        this.math = new Math2D({
            WIN: this.WIN,
            canvas: this.canvas
        });
        this.run();
    }

    addFunction() {
        this.funcs.push({
            f: () => null,
            color: 'red',
            width: 2,
            sLine: 0,
            eLine: 0,
            isDerivative: false
        });
        this.setState({ funcsLength: this.funcs.length });
    }

    deleteFunction(index) {
        this.funcs.splice(index, 1);
        this.setState({ funcsLength: this.funcs.length });
        this.run();
    }

    mouseMove(e) {
        if (this.canMove) {
          this.WIN.LEFT -= this.canvas.sx(e.nativeEvent.movementX);
          this.WIN.BOTTOM -= this.canvas.sy(e.nativeEvent.movementY);
        }
        this.derevativeX = this.WIN.LEFT + this.canvas.sx(e.nativeEvent.offsetX);
        this.run()
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

    printFunction(f, color, width) {
        let x = this.WIN.LEFT;
        const dx = this.WIN.WIDTH / 1000;
        while (x < this.WIN.LEFT + this.WIN.WIDTH) {
            this.canvas.line(x, f(x), x + dx, f(x + dx), color, width);
            x += dx;
        }
    }

    run() {
        this.canvas.clear();
        this.math.printXY();
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
                <canvas 
                    id = "graph2DCanvas"
                    onMouseDown = {() => this.canMove = true}
                    onMouseUp = {() => this.canMove = false}
                    onMouseLeave = {() => this.canMove = false}
                    onMouseMove = {(e) => this.mouseMove(e)}
                    onWheel = {(e) => this.wheel(e)}
                ></canvas>
                <UI
                    key = { this.state.funcsLength }
                    funcs = { this.funcs }
                    addFunction = {() => this.addFunction()}
                    delFunction = {() => this.deleteFunction()}
                    run = { () => this.run() }
                ></UI>
            </div>
        );
    }
}

export default Graph2D;