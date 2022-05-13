import { useEffect } from "react";
import Canvas from "../../modules/canvas/Canvas";
import Math2D from "../../modules/Math/Math2D";
import UI from "../UI/UI";

import './graph2D.css'

function Graph2D () {
    const WIN = {
        LEFT: -15,
        BOTTOM: -15,
        WIDTH: 30,
        HEIGHT: 30
    };

    let canvas;
    let math;

    const funcs = [];
    let derevativeX = 0;
    let canMove = false;


    useEffect(() => {
        canvas = new Canvas({
            id: 'graph2DCanvas',
            WIN: WIN,
        });
        math = new Math2D({
            WIN: WIN,
            canvas: canvas
        });
        const animLoop = () => {
            run();
            window.requestAnimFrame(animLoop);
        }
        animLoop();
    }, []); 

    const mouseMove = (e) => {
        if (canMove) {
          WIN.LEFT -= canvas.sx(e.nativeEvent.movementX);
          WIN.BOTTOM -= canvas.sy(e.nativeEvent.movementY);
        }
        derevativeX = WIN.LEFT + canvas.sx(e.nativeEvent.offsetX);
        run();
    }

    const wheel = (e) => {
        let delta = e.deltaY > 0 ? -0.3 : +0.3
        if(WIN.BOTTOM + delta < -6) {
          WIN.WIDTH -= delta
          WIN.HEIGHT -= delta
          WIN.LEFT += delta / 2
          WIN.BOTTOM += delta / 2
        }
        run();
    }

    const printXY = () => {
        const { LEFT, BOTTOM, WIDTH, HEIGHT } = WIN;
        //XY
        canvas.line(0, BOTTOM,0, HEIGHT + BOTTOM,'black');
        canvas.line(LEFT, 0, WIDTH + LEFT, 0,'black');
        //Arrows
        canvas.line(WIDTH + LEFT, 0, WIDTH + LEFT - 0.4, 0.15,'black', 1.5);
        canvas.line(WIDTH + LEFT, 0, WIDTH + LEFT - 0.4, -0.15,'black', 1.5);
        canvas.line(0, HEIGHT + BOTTOM,-0.15, HEIGHT + BOTTOM - 0.4,'black', 1.5);
        canvas.line(0, HEIGHT + BOTTOM, 0.15, HEIGHT + BOTTOM - 0.4,'black', 1.5);
        //Text
        canvas.text('0', 0.5, -0.7);
        canvas.text('1', 1, 1);
        canvas.text('-1', -1, -1);
        canvas.text('x', WIDTH + LEFT - 0.4, -0.5);
        canvas.text('y', 0.5, HEIGHT + BOTTOM - 1);
        //Lines
        for(let i = 0; i < HEIGHT + BOTTOM; i ++) {
            canvas.line (-0.2, i, 0.2, i, 'black', 1);
        }
        for(let i = 0; i > BOTTOM; i --) {
            canvas.line (-0.2, i, 0.2, i, 'black', 1);
        }
        for(let i = 0; i < WIDTH + LEFT; i ++) {
            canvas.line (i, -0.2, i, 0.2, 'black', 1);
        }
        for(let i = 0; i > LEFT; i --) {
            canvas.line(i, -0.2, i, 0.2,'black', 1);
        }
        //Net
        for(let i = 0; i > LEFT; i --){
            canvas.line (i, BOTTOM + LEFT, i, HEIGHT + BOTTOM,'black', 0.3);
        }
        for(let i = 0; i < HEIGHT + LEFT - BOTTOM + WIDTH; i++) {
            canvas.line (i, BOTTOM, i, 0,'black', 0.3);
        }
        for(let i = 0; i < HEIGHT + LEFT + BOTTOM + WIDTH; i++) {
            canvas.line (i, 0, i, HEIGHT + BOTTOM,'black', 0.3);
            canvas.line (LEFT, i, HEIGHT + LEFT, i, 'black', 0.3);
        }
        for(let i = 0; i > BOTTOM; i --) {
            canvas.line (LEFT + BOTTOM, i, WIDTH + LEFT, i, 'black', 0.3);
        }
        for(let i = 0; i < HEIGHT - LEFT + BOTTOM + WIDTH; i ++) {
            canvas.line (LEFT, i, 0, i, 'black', 0.3);
        }
    }

    const printFunction = (f, color, width) => {
        let x = WIN.LEFT;
        const dx = WIN.WIDTH / 1000;
        while (x < WIN.LEFT + WIN.WIDTH) {
            canvas.line(x, f(x), x + dx, f(x + dx), color, width);
            x += dx;
        }
    }

    const run = () => {
        canvas.resize();
        canvas.transparentClear();
        printXY();
        //functions
        funcs.forEach(f => {
            if (f) {
                printFunction(f.f, f.color, f.width);
            }
        });
        //Derivative
        funcs.forEach(f => {
            if (f && f.isDerivative) {
                math.printTangent(f.f, derevativeX);
            }
        });
        //Integral
        funcs.forEach(f => {
            if(f) {
                math.printIntegral(f.f, f.sLine - 0, f.eLine - 0)
            }
        });
        //GetZero
        funcs.forEach(f => {
            if(f) {
                let xZero = math.getZero(f.f, f.sLine - 0, f.eLine - 0, 0.00001);
                if(f.sLine < f.eLine) {
                    canvas.line(f.sLine, 0, f.eLine, 0, 'orange', 2);
                    if(
                        xZero != null &&
                        xZero >= f.sLine &&
                        xZero <= f.eLine
                    ) { canvas.point(xZero, 0); };
                }
            }
        });
    }


        return (
            <div className = "graph2D">
                <UI
                    name = "graph2D"
                    funcs = { funcs }
                ></UI>
                <canvas 
                    className = "canvas2D"
                    id = "graph2DCanvas"
                    onMouseDown = {() => canMove = true}
                    onMouseUp = {() => canMove = false}
                    onMouseLeave = {() => canMove = false}
                    onMouseMove = {(e) => mouseMove(e)}
                    onWheel = {(e) => wheel(e)}
                ></canvas>
            </div>
        );
}

export default Graph2D;