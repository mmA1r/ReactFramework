import React from "react";
import './components/canvas.css'

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        const { WIN } = props;
        this.WIN = WIN;
    }

    render() {
        return(
            <canvas
                id = "canvas"
                width = '700'
                height = '700'
            ></canvas>
        );
    }
}

export default Canvas;