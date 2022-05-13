
import { useRef } from 'react';
import './figureSelector.css'

function FigureSelector (props) {
    const { selectFigure } = props;

    const select = useRef(null);
    const selectOnChange = () => {select.current.focus()}

    return (
        <div className = "figureSelector">
            <select
                ref = { select }
                defaultValue = "sphere"
                id = "figures"
                onChange = {() => {selectOnChange(); selectFigure(select.current)}}
            >
                <option className = "options">cube</option>
                <option className = "options">cone</option>
                <option className = "options">pyramid</option>
                <option className = "options">sphere</option>
                <option className = "options">ellipsoid</option>
                <option className = "options">ellipticalCylinder</option>
                <option className = "options">ellipticalParaboloid</option>
                <option className = "options">hyperbolicCylinder</option>
                <option className = "options">hyperbolicParaboloid</option>
                <option className = "options">parabolicCylinder</option>
                <option className = "options">singleHyperboloid</option>
                <option className = "options">doubleHyperboloid</option>
                <option className = "options">tor</option>
                <option className = "options">solarSystem</option>
            </select>
        </div>
    );
}

export default FigureSelector;