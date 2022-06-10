import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function hyperbolicParaboloid (y = 8, xz = 10, count = 20) {
    const edges = [];
    const points = [];
    const polygons = [];
    const delta = 2 * Math.PI / count; 

    //points
    for(let i = -(Math.PI); i < Math.PI; i += delta) {
        for(let j = -(Math.PI); j < Math.PI; j += delta) {
            points.push(new Point(
                i * Math.sqrt(2 * y),
                Math.pow(i, 2) - Math.pow(j, 2),
                j * Math.sqrt(2 * xz)
            ));
        }
    }

    //edges
    for(let i = 0; i < points.length; i++) {
        if(points[i + 1]) {
            if((i + 1) % count === 0) {
                if(points[i - count]) {
                    edges.push(new Edge(i, i - count));
                }
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if(points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }

    //polygons

    // 2X2 CHESS

    for(let i = 0; i < points.length - count; i+=4) {
        if(points[i + count + 1] && (i + 1) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                ((i >= 6 * count && i < 8 * count)) || 
                ((i >= 10 * count && i < 12 * count)) || 
                ((i >= 14 * count && i < 16 * count)) || 
                ((i >= 18 * count && i < 20 * count)) || 
                ((i >= 22 * count && i < 24 * count)) ||
                ((i >= 26 * count && i < 28 * count)) ||
                ((i >= 30 * count && i < 32 * count))
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
            }
        }
    }
    for(let i = 1; i < points.length - count; i+=4) {
        if(points[i + count + 1] && (i + 1) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                ((i >= 6 * count && i < 8 * count)) || 
                ((i >= 10 * count && i < 12 * count)) || 
                ((i >= 14 * count && i < 16 * count)) || 
                ((i >= 18 * count && i < 20 * count)) || 
                ((i >= 22 * count && i < 24 * count)) ||
                ((i >= 26 * count && i < 28 * count)) ||
                ((i >= 30 * count && i < 32 * count))
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
            }
        }
    }
    for(let i = 2; i < points.length - count; i+=4) {
        if(points[i + count + 1] && (i + 1) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                ((i >= 6 * count && i < 8 * count)) || 
                ((i >= 10 * count && i < 12 * count)) || 
                ((i >= 14 * count && i < 16 * count)) || 
                ((i >= 18 * count && i < 20 * count)) || 
                ((i >= 22 * count && i < 24 * count)) ||
                ((i >= 26 * count && i < 28 * count)) ||
                ((i >= 30 * count && i < 32 * count))
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            }
        }
    }
    for(let i = 3; i < points.length - count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                ((i >= 6 * count && i < 8 * count)) || 
                ((i >= 10 * count && i < 12 * count)) || 
                ((i >= 14 * count && i < 16 * count)) || 
                ((i >= 18 * count && i < 20 * count)) || 
                ((i >= 22 * count && i < 24 * count)) ||
                ((i >= 26 * count && i < 28 * count)) ||
                ((i >= 30 * count && i < 32 * count))
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            }
        }
    }

    // strandart

    // for(let i = 0; i < points.length; i++) {
    //     if(points[i + count + 1] && (i + 1) % count !== 0) {
    //         polygons.push(new Polygon([i, i + 1, i + count + 1, i + count]));
    //     }
    // }

    return new Subject(points, edges, polygons, 'hyperbolicParaboloid');
}

export default hyperbolicParaboloid;