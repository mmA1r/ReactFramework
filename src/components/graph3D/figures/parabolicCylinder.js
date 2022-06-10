import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function parabolicCylinder (z = 10, Ox = 4, count = 10) {
    const edges = [];
    const points = [];
    const polygons = [];

    const deltaZ = z / count;
    const deltaT = Math.PI / count;

    //points
    for(let j = -z; j < z; j += deltaZ) {
        for(let i = 0; i < 2 * Math.PI; i += deltaT) {
            points.push(new Point(
                Math.sqrt(2 * Ox * i),
                j,
                i, 
            ));
        }
    }
    for(let j = -z; j < z; j += deltaZ) {
        for(let i = 0; i < 2 * Math.PI; i += deltaT) {
            points.push(new Point(
                -Math.sqrt(2 * Ox * i),
                j,
                i, 
            ));
        }
    }
    
    //edges
    for(let i = 0; i < points.length; i++) {
        if(points[i + 1]) {
            if(((i + 1) % (count * 2) === 0)) {
                //null
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
    }
    for(let j = points.length / 2; j < points.length; j++) {
        if(points[j + count * 2]) {
            edges.push(new Edge(j, j + count * 2));
        }
    }
    for(let j = 0; j < points.length / 2 - count * 2; j++) {
        if(points[j + count * 2]) {
            edges.push(new Edge(j, j + count * 2));
        }
    }

    //polygons

    // 2X2 CHESS

    for(let i = 0; i < points.length / 2 - count * 2; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) ||
                (i >= 6 * count && i < 8 * count) ||
                (i >= 10 * count && i < 12 * count) ||
                (i >= 14 * count && i < 16 * count) ||
                (i >= 18 * count && i < 20 * count) ||
                (i >= 22 * count && i < 24 * count) ||
                (i >= 26 * count && i < 28 * count) ||
                (i >= 30 * count && i < 32 * count) ||
                (i >= 34 * count && i < 36 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#4298FF'));
            }
        }
    }
    for(let i = 1; i < points.length / 2 - count * 2; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) ||
                (i >= 6 * count && i < 8 * count) ||
                (i >= 10 * count && i < 12 * count) ||
                (i >= 14 * count && i < 16 * count) ||
                (i >= 18 * count && i < 20 * count) ||
                (i >= 22 * count && i < 24 * count) ||
                (i >= 26 * count && i < 28 * count) ||
                (i >= 30 * count && i < 32 * count) ||
                (i >= 34 * count && i < 36 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#4298FF'));
            }
        }
    }
    for(let i = 2; i < points.length / 2 - count * 2; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) ||
                (i >= 6 * count && i < 8 * count) ||
                (i >= 10 * count && i < 12 * count) ||
                (i >= 14 * count && i < 16 * count) ||
                (i >= 18 * count && i < 20 * count) ||
                (i >= 22 * count && i < 24 * count) ||
                (i >= 26 * count && i < 28 * count) ||
                (i >= 30 * count && i < 32 * count) ||
                (i >= 34 * count && i < 36 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#EA53D7'));
            }
        }
    }
    for(let i = 3; i < points.length / 2 - count * 2; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) ||
                (i >= 6 * count && i < 8 * count) ||
                (i >= 10 * count && i < 12 * count) ||
                (i >= 14 * count && i < 16 * count) ||
                (i >= 18 * count && i < 20 * count) ||
                (i >= 22 * count && i < 24 * count) ||
                (i >= 26 * count && i < 28 * count) ||
                (i >= 30 * count && i < 32 * count) ||
                (i >= 34 * count && i < 36 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2], '#EA53D7'));
            }
        }
    }

    //SECOND PART

    for(let i = points.length / 2; i < points.length; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 38 * count && i < 40 * count) ||
                (i >= 42 * count && i < 44 * count) ||
                (i >= 46 * count && i < 48 * count) ||
                (i >= 50 * count && i < 52 * count) ||
                (i >= 54 * count && i < 56 * count) ||
                (i >= 58 * count && i < 60 * count) ||
                (i >= 62 * count && i < 64 * count) ||
                (i >= 66 * count && i < 68 * count) ||
                (i >= 70 * count && i < 72 * count) ||
                (i >= 74 * count && i < 76 * count)
            ) {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#EA53D7'));
            }
        }
    }
    for(let i = points.length / 2 + 1; i < points.length; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 38 * count && i < 40 * count) ||
                (i >= 42 * count && i < 44 * count) ||
                (i >= 46 * count && i < 48 * count) ||
                (i >= 50 * count && i < 52 * count) ||
                (i >= 54 * count && i < 56 * count) ||
                (i >= 58 * count && i < 60 * count) ||
                (i >= 62 * count && i < 64 * count) ||
                (i >= 66 * count && i < 68 * count) ||
                (i >= 70 * count && i < 72 * count) ||
                (i >= 74 * count && i < 76 * count)
            ) {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#EA53D7'));
            }
        }
    }
    for(let i = points.length / 2 + 2; i < points.length; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 38 * count && i < 40 * count) ||
                (i >= 42 * count && i < 44 * count) ||
                (i >= 46 * count && i < 48 * count) ||
                (i >= 50 * count && i < 52 * count) ||
                (i >= 54 * count && i < 56 * count) ||
                (i >= 58 * count && i < 60 * count) ||
                (i >= 62 * count && i < 64 * count) ||
                (i >= 66 * count && i < 68 * count) ||
                (i >= 70 * count && i < 72 * count) ||
                (i >= 74 * count && i < 76 * count)
            ) {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#4298FF'));
            }
        }
    }
    for(let i = points.length / 2 + 3; i < points.length; i+=4) {
        if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
            if(
                (i >= 38 * count && i < 40 * count) ||
                (i >= 42 * count && i < 44 * count) ||
                (i >= 46 * count && i < 48 * count) ||
                (i >= 50 * count && i < 52 * count) ||
                (i >= 54 * count && i < 56 * count) ||
                (i >= 58 * count && i < 60 * count) ||
                (i >= 62 * count && i < 64 * count) ||
                (i >= 66 * count && i < 68 * count) ||
                (i >= 70 * count && i < 72 * count) ||
                (i >= 74 * count && i < 76 * count)
            ) {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1], '#4298FF'));
            }
        }
    }

    //standart

    // for(let i = 0; i < points.length / 2 - count * 2; i++) {
    //     if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
    //         polygons.push(new Polygon([i, i + 1, i + count * 2 + 1, i + count * 2]));
    //     }
    // }
    // for(let i = points.length / 2; i < points.length; i++) {
    //     if(points[i + count * 2 + 1] && (i + 1) % (count * 2) !== 0) {
    //         polygons.push(new Polygon([i, i + count * 2, i + count * 2 + 1, i + 1]));
    //     }
    // }

    return new Subject(points, edges, polygons, 'parabolicCylinder');
}

export default parabolicCylinder;