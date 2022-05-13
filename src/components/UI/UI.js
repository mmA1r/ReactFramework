import UI2D from './ui2D/UI2D';
import UI3D from "./ui3D/UI3D";

import './ui.css';
import './uiButton.css';
import { useState } from 'react';


function UI (props) {
    const { name, funcs = [], isPoints, isEdges, isPolygons, isAnimation, isLight, 
            isSideLight, selectFigure, selectColor, selectLight
    } = props;

    const [showPanel, setShowPanel] = useState(false);
    const [funcsLength, setFuncsLength] = useState(funcs.length);

    const addFunction = () => {
        funcs.push({
            f: () => null,
            color: '#ff0000',
            width: 1,
            sLine: null,
            eLine: null,
            isDerivative: false
        });
        setFuncsLength(funcs.length);
    }

    const delFunction = (index) => {
        funcs.splice(index, 1);
        setFuncsLength(funcs.length);
    }

    const setActive = () => {
        return `uiButton ${ showPanel ? 'activeState' : ''}`;
    }

    const setVisible = () => {
        return `isVisible ${showPanel ? 'visible' : ''}`;
    }


    return (
        <div className = {showPanel ? 'uiVisible' : 'ui'}>
            <button 
                className = { setActive() }
                onClick = {() => setShowPanel(!showPanel) }
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div className = { setVisible() }>
                { name === "graph2D" ?     //2D
                    <UI2D
                        key = { funcsLength }
                        funcs = { funcs }
                        addFunction = {() => addFunction() }
                        delFunction = {(index) => delFunction(index)}
                    ></UI2D>
                : name === "graph3D" ?     //3D
                    <UI3D
                        isPoints = { isPoints }
                        isEdges = { isEdges }
                        isPolygons = { isPolygons }
                        isAnimation = { isAnimation }
                        isLight = { isLight }
                        isSideLight = { isSideLight }
                        selectFigure = {(name) => selectFigure(name) }
                        selectColor = {(value) => selectColor(value) }
                        selectLight = {(value) => selectLight(value) }
                    ></UI3D>
                : ''
                }
            </div>
        </div>
    );
}

export default UI;