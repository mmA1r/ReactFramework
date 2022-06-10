import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function ellipticalCylinder (x = 10, z = 8, y = 20, count = 16) {
    const edges = [];
    const points = [];
    const polygons = [];
    const upperBasePolygons = [];
    const lowerBasePolygons = [];
    const deltaY= y / count;
    const deltaT = (2 * Math.PI) / count;

    //points
    for(let j = -y; j < y; j += deltaY) {
        for(let i = 0; i < 2 * Math.PI; i += deltaT) {
            points.push(new Point(
                x * Math.cos(i),
                j,
                z * Math.sin(i), 
            ));
        }
    }

    //edges
    for(let i = 0; i < points.length; i++) {
        if(points[i + 1]) {
            if((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if(points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }
    edges.push(new Edge(points.length - count, points.length - 1));

    //polygons

    //2X2 CHESS

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
        if((i + 1) % count === 0 && points[i + count + 1]) {
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
                polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#EA53D7'));
            }
        }
    }
    polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1], '#4298FF'));

    //standart

    // for(let i = 0; i < points.length; i++) {
    //     if(points[i + count + 1]) {
    //         if((i + 1) % count === 0) {
    //             polygons.push(new Polygon([i, i + count, i + 1, i - count + 1]));
    //         } else
    //         polygons.push(new Polygon([i, i + count, i + count + 1, i + 1]));
    //     }
    // }
    // polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1]));

    for(let i = 0; i < count; i++) { lowerBasePolygons.push(i) }
    for(let i = points.length- 1; i >= points.length - count; i--) { upperBasePolygons.push(i) }
    polygons.push(new Polygon(lowerBasePolygons));
    polygons.push(new Polygon(upperBasePolygons));

    return new Subject(points, edges, polygons, 'ellipticalCylinder');
}
export default ellipticalCylinder;