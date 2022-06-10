import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function cone (xz = 5, y = 10, count = 20) {
    const edges = [];
    const points = [];
    const polygons = [];
    const delta = 2 * Math.PI / count;

    //points
    for(let i = 0; i < 2 * Math.PI; i += delta) {
        for(let j = 0; j < 2 * Math.PI; j += delta) {
            points.push(new Point(
                xz * i * Math.sin(j),
                y * i,
                xz * i * Math.cos(j)
            ));
        }
    }
    for(let i = 0; i < 2 * Math.PI; i += delta) {
        for(let j = 0; j < 2 * Math.PI; j += delta) {
            points.push(new Point(
                xz * i * Math.sin(j),
                -y * i,
                xz * i * Math.cos(j)
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

    for(let i = 0; i < points.length / 2 - count; i+=4) {
        if(points[i + count + 1]) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            }
        }
    }
    for(let i = 1; i < points.length / 2 - count; i+=4) {
        if(points[i + count + 1]) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            }
        }
    }
    //other color
    for(let i = 2; i < points.length / 2 - count; i+=4) {
        if(points[i + count + 1]) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            }
        }
    }
    for(let i = 3; i < points.length / 2 - count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            }
        }
        if((i + 1) % count === 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i - count + 1, i + 1, i + count], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i - count + 1, i + 1, i + count], '#EA53D7'));
            }
        }
    }

    /// LOWER PART

    for(let i = points.length / 2 + 2; i < points.length; i+=4) { 
        if(points[i + count + 1]) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) || 
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) || 
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            }
        }
    }
    for(let i = points.length / 2 + 1; i < points.length; i+=4) { 
        if(points[i + count + 1]) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) || 
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) ||
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            }
        }
    }
    for(let i = points.length / 2; i < points.length; i+=4) { 
        if(points[i + count + 1]) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) ||
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) || 
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            }
        }
    }
    for(let i = points.length / 2 + 3; i < points.length; i+=4) { 
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) || 
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) || 
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            }
        }
        if((i + 1) % count === 0 && points[i + count + 1]) {
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) || 
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) || 
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i - count + 1, i + 1, i + count], '#4298FF'));
            } else {
                polygons.push(new Polygon([i, i - count + 1, i + 1, i + count], '#EA53D7'));
            }
        }
    }
    
    //standart

    // for(let i = 0; i < points.length / 2 - count; i++) {
    //     if(points[i + count + 1]) {
    //         if((i + 1) % count === 0) {
    //             polygons.push(new Polygon([i, i - count + 1, i + 1, i + count]));
    //         } else
    //         polygons.push(new Polygon([i, i + 1, i + count + 1, i + count]));
    //     }
    // }
    // for(let i = points.length / 2; i < points.length; i++) {
    //     if(points[i + count + 1]) {
    //         if((i + 1) % count === 0) {
    //             polygons.push(new Polygon([i, i + count, i + 1, i - count + 1]));
    //         } else
    //         polygons.push(new Polygon([i, i + count, i + count + 1, i + 1]));
    //     }
    // }

    polygons.push(new Polygon([points.length - 1, points.length - count, points.length - 2 * count, points.length - count - 1], '#4298FF'));
    
    //animation
    return new Subject(points, edges, polygons, 'cone');
}

export default cone;