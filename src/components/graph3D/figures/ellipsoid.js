import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function ellipsoid (x = 10, y = 5, z = 10, count = 30) {
    const edges = [];
    const points = [];
    const polygons = [];
    const deltaT = Math.PI / count;
    const deltaF =  2 * Math.PI / count; 

    //points
    for(let i = 0; i < Math.PI; i += deltaT) {
        for(let j = 0; j < 2 * Math.PI; j += deltaF) {
            points.push(new Point(
                x * Math.sin(i) * Math.sin(j),
                y * Math.cos(i),
                z * Math.sin(i) * Math.cos(j)
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

    // 3X3 with empty center.... - _-

    for (let i = 0; i < points.length; i+=5) {
        if ((i + 1) % count !== 0 && points[i + count + 1]) {
            if(
                (i >= 6 * count || i < 3 * count) &&
                (i >= 12 * count || i < 9 * count) &&
                (i >= 18 * count || i < 15 * count) &&
                (i >= 24 * count || i < 21 * count) &&
                (i <= 27 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            }
        }
    }
    for (let i = 1; i < points.length; i+=5) {
        if ((i + 1) % count !== 0 && points[i + count + 1]) {
            if(
                (i > 2 * count || i < 1 * count) &&
                (i > 6 * count || i < 3 * count) &&
                (i > 8 * count || i < 7 * count) &&
                (i > 12 * count || i < 9 * count) &&
                (i > 14 * count || i < 13 * count) &&
                (i > 18 * count || i < 15 * count) &&
                (i > 20 * count || i < 19 * count) &&
                (i > 24 * count || i < 21 * count) &&
                (i > 26 * count || i < 25 * count) &&
                (i < 27 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            }
        }
    }
    for (let i = 2; i < points.length; i+=5) {
        if ((i + 1) % count !== 0 && points[i + count + 1]) {
            if(
                (i >= 6 * count || i < 3 * count) &&
                (i >= 12 * count || i < 9 * count) &&
                (i >= 18 * count || i < 15 * count) &&
                (i >= 24 * count || i < 21 * count) &&
                (i <= 27 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
            }
        }
    }
    for (let i = 3; i < points.length; i+=5) {
        if ((i + 1) % count !== 0 && points[i + count + 1]) {
            if( 
                (i >= 3 * count) &&
                (i >= 9 * count || i < 6 * count) &&
                (i >= 15 * count || i < 12 * count) &&
                (i >= 21 * count || i < 18 * count) &&
                (i >= 27 * count || i < 24 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
            }
        }
    }
    for (let i = 4; i < points.length; i+=5) {
        if ((i + 1) % count !== 0 && points[i + count + 1]) {
            if(
                (i > 3 * count) &&
                (i > 5 * count || i < 4 * count) &&
                (i > 9 * count || i < 6 * count) &&
                (i > 11 * count || i < 10 * count) &&
                (i > 15 * count || i < 12 * count) &&
                (i > 17 * count || i < 16 * count) &&
                (i > 21 * count || i < 18 * count) &&
                (i > 23 * count || i < 22 * count) &&
                (i >= 27 * count || i < 24 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
            }
        }
    }
    for (let i = 5; i < points.length; i+=5) {
        if ((i + 1) % count !== 0 && points[i + count + 1]) {
            if(
                (i >= 3 * count) &&
                (i >= 9 * count || i < 6 * count) &&
                (i >= 15 * count || i < 12 * count) &&
                (i >= 21 * count || i < 18 * count) &&
                (i >= 27 * count || i < 24 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
            }
        }
    }

    // for (let i = 1; i < points.length; i+=6) {
    //     if ((i > 6 * count && i < 7 * count) || (i > 8 * count && i < 9 * count)) {
    //         if((i + 1) % count === 0) {i--}
    //         polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //     }
    // }

    // for (let i = 1; i < points.length; i+=6) {
    //     if (
    //         points[i + count + 1] &&
    //         (i + 1) % count !== 0 &&  
    //         ((i >= 6 * count && i < 7 * count) ||
    //         (i >= 8 * count && i < 9 * count))
    //     ) {
    //         polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //     }
    // }
    // for (let i = 2; i < points.length; i+=6) {
    //     if (
    //         points[i + count + 1] && 
    //         (i + 1) % count !== 0 && 
    //         (i >= 6 * count && i < 7 * count)
    //     ) {
    //         polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //     }
        // if(
        //     (i + 1) % count === 0 && 
        //     points[i + count + 1] && 
        //     (i >= 6 * count && i < 7 * count)
        // ) {
        //     polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#EA53D7'));
        // }
    //}
    //polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1]));

    //2X2 CHESS

    // for(let i = 0; i < points.length - count; i+=4) {
    //     if(points[i + count + 1] && (i + 1) !== 0) {
    //         if(
    //             (i >= 2 * count && i < 4 * count) || 
    //             (i >= 6 * count && i < 8 * count) || 
    //             (i >= 10 * count && i < 12 * count) || 
    //             (i >= 14 * count && i < 16 * count) || 
    //             (i >= 18 * count && i < 20 * count)
    //         ) {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //         } else {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
    //         }
    //     }
    // }
    // for(let i = 1; i < points.length - count; i+=4) {
    //     if(points[i + count + 1] && (i + 1) !== 0) {
    //         if(
    //             (i >= 2 * count && i < 4 * count) || 
    //             (i >= 6 * count && i < 8 * count) || 
    //             (i >= 10 * count && i < 12 * count) || 
    //             (i >= 14 * count && i < 16 * count) || 
    //             (i >= 18 * count && i < 20 * count)
    //         ) {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //         } else {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#4298FF"));
    //         }
    //     }
    // }
    // for(let i = 2; i < points.length - count; i+=4) {
    //     if(points[i + count + 1] && (i + 1) !== 0) {
    //         if(
    //             (i >= 2 * count && i < 4 * count) || 
    //             (i >= 6 * count && i < 8 * count) || 
    //             (i >= 10 * count && i < 12 * count) || 
    //             (i >= 14 * count && i < 16 * count) || 
    //             (i >= 18 * count && i < 20 * count)
    //         ) {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], '#4298FF'));
    //         } else {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //         }
    //     }
    // }
    // for(let i = 3; i < points.length - count; i+=4) {
    //     if(points[i + count + 1] && (i + 1) % count !== 0) {
    //         if(
    //             (i >= 2 * count && i < 4 * count) || 
    //             (i >= 6 * count && i < 8 * count) || 
    //             (i >= 10 * count && i < 12 * count) || 
    //             (i >= 14 * count && i < 16 * count) || 
    //             (i >= 18 * count && i < 20 * count)
    //         ) {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], '#4298FF'));
    //         } else {
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], "#EA53D7"));
    //         }
    //     }
    //     if((i + 1) % count === 0 && points[i + count + 1]) {
    //         if(
    //             (i >= 2 * count && i < 4 * count) || 
    //             (i >= 6 * count && i < 8 * count) || 
    //             (i >= 10 * count && i < 12 * count) || 
    //             (i >= 14 * count && i < 16 * count) || 
    //             (i >= 18 * count && i < 20 * count)
    //         ) {
    //             polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#4298FF'));
    //         } else {
    //             polygons.push(new Polygon([i - count + 1, i, i + count, i + 1], '#EA53D7'));
    //         }
    //     }
    // }
    // polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1], "#4298FF"));

    //standart

    // for (let i = 0; i < points.length; i++) {
    //     if (points[i + count + 1]) {
    //         if ((i + 1) % count === 0) {
    //             polygons.push(new Polygon([i, i + count, i + 1, i - count + 1]));
    //         } else
    //             polygons.push(new Polygon([i, i + count, i + count + 1, i + 1]));
    //     }
    // }
    //polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1]));

    return new Subject(points, edges, polygons, 'ellipsoid');
}

export default ellipsoid;