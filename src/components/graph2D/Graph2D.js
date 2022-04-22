import React from "react";
import Canvas from "./Canvas";
import UI from "./UI/UI";
import './components/graph2D.css'

class Graph2D extends React.Component {
    constructor(props) {
        super(props);

        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20
          };
    }

    render() {
        return(
            <div className = "graph2D">
                <Canvas
                    WIN = { this.WIN }
                ></Canvas>
                <UI
                
                ></UI>
            </div>
        );
    }
}

export default Graph2D;