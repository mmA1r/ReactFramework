import { useEffect } from "react";
import Canvas from "../../modules/canvas/Canvas";
import Math3D from "../../modules/Math/Math3D";
import UI from "../UI/UI";

import Light from "./Entities/Light";
import Point from "./Entities/Point";

import {
    cube, cone, doubleHyperboloid, ellipsoid, ellipticalCylinder, ellipticalParaboloid, hyperbolicCylinder,
    hyperbolicParaboloid, parabolicCylinder, pyramid, singleHyperboloid, sphere, tor
} from './figures';

import './graph3D.css';

function Graph3D() {
    let scale = window.innerHeight / window.innerWidth;
    const WIN = {
        LEFT: -10,
        BOTTOM: -10 * scale,
        WIDTH: 20,
        HEIGHT: 20 * scale,
        P1: new Point(-10, 10, 350), // upper-left corener
        P2: new Point(-10, -10, 350), // lower-left corener
        P3: new Point(10, -10, 350), // lower-right corener
        CAMERA: new Point(0, 0, 350),
        DISPLAY: new Point(0, 0, 270)
    }

    let canvas;
    let math;
    let LIGHT;
    let SUNLIGHT;

    let isPointsAllow = false;
    let isEdgesAllow = false;
    let isPolygonsAllow = true;
    let lightAllow = false;
    let sideLightAllow = true;
    let isAnimationAllow = false;

    let canMove = false;
    let dx = 0;
    let dy = 0;

    const Sun = sphere(20, 40, new Point(0, 0, 0), '#ffbc1a', [
        { // Self Rotate
            method: 'rotateOx',
            value: -Math.PI / 360
        }
    ]);
    const Mercury = sphere(1, 20, new Point(25, 0, 0), '#7b6036', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 270
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 90,
            center: new Point(0, 0, 0),
        },
    ]);
    const Venus = sphere(1.2, 20, new Point(30, 0, 0), '#c7a555', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 300
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 120,
            center: new Point(0, 0, 0),
        },
    ]);
    const Earth = sphere(3, 20, new Point(-45, 0, 0), '#00c1ff', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 360,
        },
        { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 180,
            center: new Point(0, 0, 0),
            moveJoined: true
        },
    ]);
    const Moon = sphere(0.5, 20, new Point(-53, 0, 0), '#ff0000', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 360
        },
        { // Earth Rotate
            method: 'rotateOx',
            value: Math.PI / 180,
            center: Earth.center
        }
    ]);
    const Mars = sphere(2, 20, new Point(-55, 0, 0), '#ff0000', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 390
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 210,
            center: new Point(0, 0, 0),
        },
    ]);
    const Jupiter = sphere(10, 40, new Point(75, 0, 0), '#e1dab8', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 430
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 360,
            center: new Point(0, 0, 0),
        },
    ]);
    const Saturn = sphere(9, 40, new Point(-90, 0, 0), '#b59e68', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 430
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 450,
            center: new Point(0, 0, 0),
        },
    ]);
    const Uranus = sphere(6, 30, new Point(120, 0, 0), '#2688f5', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 470
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 510,
            center: new Point(0, 0, 0),
        },
    ]);
    const Neptune = sphere(5, 30, new Point(-170, 0, 0), '#5bebed', [
        { // Self Rotate
            method: 'rotateOx',
            value: Math.PI / 510
        }, { // Center Rotate
            method: 'rotateOx',
            value: Math.PI / 650,
            center: new Point(0, 0, 0),
        },
    ]);

    const solarSystem = [Sun, Earth, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune];

    const figure = {
        cube: cube(),
        cone: cone(),
        doubleHyperboloid: doubleHyperboloid(),
        ellipsoid: ellipsoid(),
        ellipticalCylinder: ellipticalCylinder(),
        ellipticalParaboloid: ellipticalParaboloid(),
        hyperbolicCylinder: hyperbolicCylinder(),
        hyperbolicParaboloid: hyperbolicParaboloid(),
        parabolicCylinder: parabolicCylinder(),
        pyramid: pyramid(),
        singleHyperboloid: singleHyperboloid(),
        sphere: sphere(),
        tor: tor()
    }

    let figures = [figure.sphere];

    const animations = [
        {//Sun
            root: Sun,
            nodes: [
                {// Mercury
                    root: Mercury
                }, {//Venus
                    root: Venus
                }, {//Earth
                    root: Earth,
                    nodes: [
                        { root: Moon }
                    ]
                }, {// Mars
                    root: Mars
                }, {//Jupiter
                    root: Jupiter
                }, {//Saturn
                    root: Saturn
                }, {// Uranus
                    root: Uranus
                }, {//Neptune
                    root: Neptune
                }
            ]
        }
    ];

    useEffect(() => {
        /*eslint-disable */
        canvas = new Canvas({
            id: 'graph3DCanvas',
            WIN: WIN,
        });

        math = new Math3D({
            WIN: WIN,
        });

        LIGHT = new Light(-70, 2, 0, 300000);
        SUNLIGHT = new Light(0, 0, 0, 300000);
        /*eslint-enable */
        const animLoop = () => {
            // print scene
            if (isAnimationAllow) {
                figuresAnimantion(animations);
            }
            math.calcPlane();
            math.calcWindowVectors();
            run(figures);
            window.requestAnimFrame(animLoop);
        }
        animLoop();
    });

    const scaleCanvas = () => {
        if (scale !== window.innerHeight / window.innerWidth) {
            WIN.BOTTOM /= scale;
            WIN.HEIGHT /= scale;
            scale = window.innerHeight / window.innerWidth;
            WIN.BOTTOM *= scale;
            WIN.HEIGHT *= scale;
        }
    }

    //Animations
    const figureAnimantion = (figure, parentMatrix = math.one()) => {
        //General Matrix
        const matrix = figure.animations.reduce((accumulator, anime) => {
            const center = anime.center || figure.center;
            const { x, y, z } = center;
            const matrix = [
                math.move({ x, y, z }),
                math[anime.method](anime.value),
                math.move({ x: -x, y: -y, z: -z })
            ].reduce(
                (S, matrix) => math.multMatrix(S, matrix),
                math.one()
            );
            return math.multMatrix(accumulator, matrix);
        }, parentMatrix);
        // Inherited Matrix
        const InheritedMatrix = figure.animations.reduce((accumulator, anime) => {
            const center = anime.center || figure.center;
            const { x, y, z } = center;
            if (anime.moveJoined) {
                var matrix = [
                    math.move({ x, y, z }),
                    math[anime.method](anime.value),
                    math.move({ x: -x, y: -y, z: -z })
                ].reduce(
                    (S, matrix) => math.multMatrix(S, matrix),
                    math.one()
                );
            } else {
                matrix = math.one();
            }
            return math.multMatrix(accumulator, matrix);
        }, parentMatrix);

        //Transform current figure
        math.transform(matrix, figure.center);
        figure.points.forEach(point => math.transform(matrix, point));
        return InheritedMatrix;
    }

    const figuresAnimantion = (animations, parentMatrix = math.one()) => {
        animations.forEach(anime => {
            const matrix = figureAnimantion(anime.root, parentMatrix);
            if (anime.nodes) {
                figuresAnimantion(anime.nodes, matrix);
            }
        });
    }

    //UserActions
    const transformCamera = (matrix) => {
        math.transform(matrix, WIN.CAMERA);
        math.transform(matrix, WIN.DISPLAY);
        math.transform(matrix, WIN.P1);
        math.transform(matrix, WIN.P2);
        math.transform(matrix, WIN.P3);
    }

    const keyDownHandler = (e) => {
        // eslint-disable-next-line
        switch (e.keyCode) {
            case 65: // key a
                return transformCamera(math.rotateOx(-Math.PI / 180));
            case 68: // key d
                return transformCamera(math.rotateOx(Math.PI / 180));
            case 83: // key s
                return transformCamera(math.rotateOy(Math.PI / 180));
            case 87: // key w
                return transformCamera(math.rotateOy(-Math.PI / 180));
            case 81: // key q
                return transformCamera(math.rotateOz(Math.PI / 180));
            case 69: // key e
                return transformCamera(math.rotateOz(-Math.PI / 180));
            case 39: // key right arrow
                return transformCamera(math.move({ x: 1, y: 0, z: 0 }));
            case 37: // key left arrow
                return transformCamera(math.move({ x: -1, y: 0, z: 0 }));
            case 38: // key upper arrow
                return transformCamera(math.move({ x: 0, y: 1, z: 0 }));
            case 40: //key lower arrow
                return transformCamera(math.move({ x: 0, y: -1, z: 0 }));
        }
    }

    const mouseMove = (e) => {
        if (canMove) {
            const gradus = Math.PI / 960;
            transformCamera(math.rotateOy((dy - e.nativeEvent.offsetY) * gradus));
            transformCamera(math.rotateOx((dx - e.nativeEvent.offsetX) * gradus));
            dx = e.nativeEvent.offsetX;
            dy = e.nativeEvent.offsetY;
        }
    }

    const wheel = (e) => {
        const delta = (e.nativeEvent.wheelDeltaY > 0) ? -0.02 : 0.02;
        transformCamera(math.move({
            x: WIN.CAMERA.x * delta,
            y: WIN.CAMERA.y * delta,
            z: WIN.CAMERA.z * delta
        }));
    }

    //UI
    const selectFigure = (name) => {
        if (name.options[name.selectedIndex].text === 'solarSystem') {
            figures = solarSystem;
        } else {
            figures = [figure[name.options[name.selectedIndex].text]];
        }
    }

    const selectColor = (value) => {
        figures.forEach(figure => {
            figure.polygons.forEach(polygon => {
                polygon.colour = polygon.hexToRgb(value);
            });
        });
    }

    const selectLight = (value) => {
        SUNLIGHT.lumen = value;
        LIGHT.lumen = value;
    }

    const isPoints = () => {
        return isPointsAllow = !isPointsAllow;
    }

    const isEdges = () => {
        return isEdgesAllow = !isEdgesAllow;
    }

    const isPolygons = () => {
        return isPolygonsAllow = !isPolygonsAllow;
    }

    const isAnimation = () => {
        isAnimationAllow = !isAnimationAllow;
    }

    const isLight = () => {
        return lightAllow = !lightAllow;
    }

    const isSideLight = () => {
        return sideLightAllow = !sideLightAllow;
    }

    const run = (figures) => {
        math.calcPlane();
        math.calcWindowVectors();
        scaleCanvas();
        canvas.resize();
        canvas.transparentClear();
        //polygons
        if (isPolygonsAllow) {
            const polygons = [];
            figures.forEach((figure, index) => {
                math.clacDisctance(figure, WIN.CAMERA, 'distance');
                math.clacDisctance(figure, SUNLIGHT, 'lumen');
                math.clacDisctance(figure, LIGHT, 'sideLimen');
                math.normVector(figure);
                figure.polygons.forEach(polygon => {
                    polygon.figureIndex = index;
                    polygons.push(polygon);
                });
            });
            math.sortByArtistAlgorithm(polygons);
            polygons.forEach(polygon => {
                const figure = figures[polygon.figureIndex];
                const points = polygon.points.map(point => {
                    return math.getProection(figure.points[point]);
                });
                let sunLumen = math.clacIlluminationDistance(polygon.lumen, SUNLIGHT.lumen);
                let sideLumen = math.clacIlluminationDistance(polygon.sideLimen, LIGHT.lumen);
                if (!lightAllow) {
                    sunLumen = 0;
                }
                if (!sideLightAllow) {
                    sideLumen = 0;
                }
                let { r, g, b } = polygon.colour;
                r = Math.round(r * (sunLumen + sideLumen));
                g = Math.round(g * (sunLumen + sideLumen));
                b = Math.round(b * (sunLumen + sideLumen));
                //const angle = math.calcCorner(polygon.norm, WIN.CAMERA);
                //if ((Math.acos(angle) >= 0 && Math.acos(angle) <= Math.PI / 2)) {
                canvas.polygon(points, polygon.rgbToHex(r, g, b));
                //}
                if (figure.name === 'hyperbolicParaboloid' || figure.name === 'parabolicCylinder' || figure.name === 'hyperbolicCylinder' || figure.name === 'cone') {
                    canvas.polygon(points, polygon.rgbToHex(r, g, b));
                }
            });
        }
        //edges
        if (isEdgesAllow) {
            figures.forEach(figure => {
                figure.edges.forEach(edge => {
                    const point1 = math.getProection(figure.points[edge.p1]);
                    const point2 = math.getProection(figure.points[edge.p2]);
                    canvas.line(
                        point1.x,
                        point1.y,
                        point2.x,
                        point2.y,
                        'black', 1
                    );
                });
            });
        }
        //points
        if (isPointsAllow) {
            figures.forEach(figure => {
                figure.points.forEach(point => {
                    const proectionPoint = math.getProection(point);
                    canvas.point(proectionPoint.x, proectionPoint.y);
                });
            });
        }
    }

    return (
        <div className="graph3D">
            <canvas
                className="canvas3D"
                id="graph3DCanvas"
                onMouseDown={() => canMove = true}
                onMouseUp={() => canMove = false}
                onMouseLeave={() => canMove = false}
                onWheel={(e) => wheel(e)}
                onMouseMove={(e) => mouseMove(e)}
                onKeyDown={(e) => keyDownHandler(e)}
                tabIndex="0"
            ></canvas>
            <UI
                name="graph3D"
                //allows
                isPoints={() => isPoints()}
                isEdges={() => isEdges()}
                isPolygons={() => isPolygons()}
                isAnimation={() => isAnimation()}
                isLight={() => isLight()}
                isSideLight={() => isSideLight()}
                //options
                selectFigure={(name) => selectFigure(name)}
                selectColor={(value) => selectColor(value)}
                selectLight={(value) => selectLight(value)}
            ></UI>
        </div>
    );
}

export default Graph3D;