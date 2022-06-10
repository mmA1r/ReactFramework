import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function sphere (
    R = 10, 
    count = 20,
    center = new Point(0, 0, 0), 
    color,
    animations,
    name = 'sphere'
) {
    const edges = [];
    const points = [];
    const polygons = [];

    const deltaT = Math.PI / count;
    const deltaF = 2 * Math.PI / count;

    //points
    for (let i = 0; i < Math.PI; i += deltaT) {
        for (let j = 0; j < 2 * Math.PI; j += deltaF) {
            points.push(new Point(
                R * Math.sin(i) * Math.sin(j) + center.x,
                R * Math.cos(i) + center.y,
                R * Math.sin(i) * Math.cos(j) + center.z,
            ));
        }
    }

    //edges
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
            if ((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }
    edges.push(new Edge(points.length - count, points.length - 1));

    //polygons

    // 2X2 CHESS ORDER

    for(let i = 0; i < points.length - count; i+=4) {
        if(points[i + count + 1] && (i + 1) !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
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
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
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
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
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
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            }
        }
        if((i + 1) % count === 0 && points[i + count + 1]) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#4298FF'));
            } else {
                polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#EA53D7'));
            }
        }
    }
    polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1], '#4298FF'));

    //standart

    // for (let i = 0; i < points.length; i++) {
    //     if (points[i + count + 1]) {
    //         if ((i + 1) % count === 0) {
    //             polygons.push(new Polygon([i, i + count, i + 1, i - count + 1], color));
    //         } else
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], color));
    //     }
    // }
    //polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1], color));

    return new Subject(points, edges, polygons, name, animations, center);
}

export default sphere;