import React from "react";
import Canvas from "../../modules/canvas/Canvas";
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
    }

    componentDidMount() {
        this.canvas = new Canvas({
            id: 'graph2DCanvas',
            WIN: this.WIN
        });
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
        this.funcs.forEach(f => {
            if (f) {
                this.printFunction(f.f, f.color, f.width);
            }
        });
    }

    addFunction() {
        this.funcs.push({
            f: () => null,
            color: 'red',
            width: 2
        });
        this.setState({ funcsLength: this.funcs.length });
    }

    render() {
        return (
            <div className="graph2D">
                <canvas id="graph2DCanvas"></canvas>
                <UI
                    key={this.state.funcsLength}
                    funcs={this.funcs}
                    addFunction={() => this.addFunction()}
                    run={() => this.run()}
                ></UI>
            </div>
        );
    }
}

export default Graph2D;