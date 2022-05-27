import FigureSelector from "./figureSelector/FigureSelector";
import LightSelector from "./lightSelector/LightSelector";
import ColorSelector from "./colorSelector/ColorSelector";

import './ui3D.css'
import { useState } from "react";

function UI3D(props) {
    const { isPoints, isEdges, isPolygons, isAnimation, isLight,
        isSideLight, selectFigure, selectColor, selectLight
    } = props;

    const [points, setPoints] = useState(false);
    const [edges, setEdges] = useState(false);
    const [polygons, setPolygons] = useState(true);
    const [light, setLight] = useState(false);
    const [sideLight, setSideLight] = useState(true);
    const [animation, setAnimation] = useState(false);

    return (
        <div className="ui3D">
            <FigureSelector
                selectFigure={(name) => selectFigure(name)}
            ></FigureSelector>
            <div className="options3D">
                <div>
                    <button  //Points
                        className={points ? 'optionButton active' : 'optionButton'}
                        onClick={() => {
                            setPoints(!points);
                            isPoints();
                        }
                        }>Points</button>
                    <button  //Edges
                        className={edges ? 'optionButton active' : 'optionButton'}
                        onClick={() => {
                            setEdges(!edges);
                            isEdges();
                        }
                        }>Edges</button>
                    <button  //Polygons
                        className={polygons ? 'optionButton active' : 'optionButton'}
                        onClick={() => {
                            setPolygons(!polygons);
                            isPolygons();
                        }
                        }>Polygons</button>
                </div>
                <div>
                    <button  //Light
                        className={light ? 'optionButton active' : 'optionButton'}
                        onClick={() => {
                            setLight(!light);
                            isLight();
                        }
                        }>Light</button>
                    <button  //SideLight
                        className={sideLight ? 'optionButton active' : 'optionButton'}
                        onClick={() => {
                            setSideLight(!sideLight);
                            isSideLight();
                        }
                        }>SideLight</button>
                    <button  //Animation
                        className={animation ? 'optionButton active' : 'optionButton'}
                        onClick={() => {
                            setAnimation(!animation);
                            isAnimation();
                        }
                        }>Animation</button>
                </div>
            </div>
            <LightSelector
                selectLight={(value) => selectLight(value)}
            ></LightSelector>
            <ColorSelector
                selectColor={(value) => selectColor(value)}
            ></ColorSelector>
        </div>
    );
}

export default UI3D;