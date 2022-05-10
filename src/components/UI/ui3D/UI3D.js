import React from "react";
import FigureSelector from "./figureSelector/FigureSelector";
import LightSelector from "./lightSelector/LightSelector";
import ColorSelector from "./colorSelector/ColorSelector";

import './ui3D.css'

class UI3D extends React.Component {
    constructor(props) {
        super(props);
        const { isPoints, isEdges, isPolygons, isAnimation, isLight, isSideLight, selectFigure, selectColor, selectLight } = props;
        this.isPoints = isPoints;
        this.isEdges = isEdges;
        this.isPolygons = isPolygons;
        this.isAnimation = isAnimation;
        this.isLight = isLight;
        this.isSideLight = isSideLight;
        this.selectFigure = selectFigure;
        this.selectColor = selectColor;
        this.selectLight = selectLight;
        this.state = {
            points: false,
            edges: false,
            polygons: true,
            light: false,
            sideLight: true,
            animation: false
        }
    }

    setName(name) {
        this.setState({ [name]: !this.state[name] });
    }

    render() {
        return (
            <div className = "ui3D">
                <FigureSelector
                    selectFigure = {() => this.selectFigure()}
                ></FigureSelector>
                <div className = "options3D">
                    <div>
                        <button  //Points
                            className = {this.state.points ? 'optionButton active' : 'optionButton'} 
                            onClick = {() => {this.isPoints(); this.setName('points')}
                        }>Points</button>
                        <button  //Edges
                            className = {this.state.edges ? 'optionButton active' : 'optionButton'} 
                            onClick = {() => {this.isEdges(); this.setName('edges')}
                        }>Edges</button>
                        <button  //Polygons
                            className = {this.state.polygons ? 'optionButton active' : 'optionButton'} 
                            onClick = {() => {this.isPolygons(); this.setName('polygons')}
                        }>Polygons</button>
                    </div>
                    <div>
                        <button  //Light
                            className = {this.state.light ? 'optionButton active' : 'optionButton'} 
                            onClick = {() => {this.isLight(); this.setName('light')}
                            }>Light</button>
                        <button  //SideLight
                            className = {this.state.sideLight ? 'optionButton active' : 'optionButton'} 
                            onClick = {() => {this.isSideLight(); this.setName('sideLight')}
                        }>SideLight</button>
                        <button  //Animation
                            className = {this.state.animation ? 'optionButton active' : 'optionButton'} 
                            onClick = {() => {this.isAnimation(); this.setName('animation')}
                        }>Animation</button>
                    </div>
                </div>
                <LightSelector
                    selectLight = {() => this.selectLight()}
                ></LightSelector>
                <ColorSelector
                    selectColor = {() => this.selectColor()}
                ></ColorSelector>
            </div>
        );
    }
}

export default UI3D;