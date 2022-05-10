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

    setPoints() {
        return `optionButton ${this.state.points ? 'active' : ''}`
    }

    setEdges() {
        return `optionButton ${this.state.edges ? 'active' : ''}`
    }

    setPolygons() {
        return `optionButton ${this.state.polygons ? 'active' : ''}`
    }

    setAnimation() {
        return `optionButton ${this.state.animation ? 'active' : ''}`
    }

    setLight() {
        return `optionButton ${this.state.light ? 'active' : ''}`
    }

    setSideLight() {
        return `optionButton ${this.state.sideLight ? 'active' : ''}`
    }

    render() {
        return (
            <div className = "ui3D">
                <FigureSelector
                    selectFigure = {() => this.selectFigure()}
                ></FigureSelector>
                <div className = "options3D">
                    <div>
                        <button className = {this.setPoints()} onClick = {() => {this.isPoints(); this.setName('points')}}>Points</button>
                        <button className = {this.setEdges()} onClick = {() => {this.isEdges(); this.setName('edges')}}>Edges</button>
                        <button className = {this.setPolygons()} onClick = {() => {this.isPolygons(); this.setName('polygons')}}>Polygons</button>
                    </div>
                    <div>
                        <button className = {this.setLight()} onClick = {() => {this.isLight(); this.setName('light')}}>Light</button>
                        <button className = {this.setSideLight()} onClick = {() => {this.isSideLight(); this.setName('sideLight')}}>SideLight</button>
                        <button className = {this.setAnimation()} onClick = {() => {this.isAnimation(); this.setName('animation')}}>Animation</button>
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