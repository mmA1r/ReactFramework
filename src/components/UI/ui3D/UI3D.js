import React from "react";
import ColorSelect from "./Selectors/ColorSelect";
import FigureSelect from "./Selectors/FigureSelect";
import LightSelect from "./Selectors/LightSelect";

import './ui3D.css';

class UI3D extends React.Component {
    constructor(props) {
        super(props);

        this.isPointsAllow = false;
        this.isEdgesAllow = false;
        this.isPolygonsAllow = true;
        this.lightAllow = true;
        this.sideLightAllow = false;
        this.isAnimationAllow = false;
    }

    render() {
        return (
            <div
                className = "ui3D"        
            >
                <button onClick = {() => this.lightAllow = !this.lightAllow}>Ligh</button>
                <button onClick = {() => this.sideLightAllow = !this.sideLightAllow}>Side Light</button>
                <button onClick = {() => this.isAnimationAllow = !this.isAnimationAllow}>Animation</button>
                <button onClick = {() => {this.isPointsAllow = !this.isPointsAllow; this.run(this.figures)}}>Points</button>
                <button onClick = {() => {this.isEdgesAllow = !this.isEdgesAllow; this.run(this.figures)}}>Edges</button>
                <button onClick = {() => {this.isPolygonsAllow = !this.isPolygonsAllow; this.run(this.figures)}}>Polygons</button>
                <ColorSelect></ColorSelect>
                <LightSelect></LightSelect>
                <FigureSelect></FigureSelect>
            </div>
        );
    }
}

export default UI3D;