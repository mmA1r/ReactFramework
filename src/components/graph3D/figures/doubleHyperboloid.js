import Subject from '../Entities/Subject';
import Point from '../Entities/Point';
import Edge from '../Entities/Edge';
import Polygon from '../Entities/Polygon';

function doubleHyperboloid (xz = 3, y = 3, count = 20) {
    const edges = [];
    const points = [];
    const polygons = [];
    const delta = 2 * Math.PI / count;

    //points
    for(let i = -(Math.PI); i < Math.PI; i += delta) {
        for(let j = 0; j < 2 * Math.PI; j += delta) {
            points.push(
                new Point(
                xz * Math.sinh(i) * Math.cos(j),
                -y * Math.cosh(i),
                xz * Math.sinh(i) * Math.sin(j),
            ));
        }
    }
    for(let i = -(Math.PI); i < Math.PI; i += delta) {
        for(let j = 0; j < 2 * Math.PI; j += delta) {
            points.push(
                new Point(
                xz * Math.sinh(i) * Math.cos(j),
                y * Math.cosh(i),
                xz * Math.sinh(i) * Math.sin(j)
                ),
            )
        }
    }

    //edges
    for(let i = 0; i < points.length / 2 - count; i++) {
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
    for(let i = points.length / 2; i < points.length; i++) {
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
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#4298FF'));
            }
        }
    }
    for(let i = 1; i < points.length / 2 - count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            if(
                (i >= 2 * count && i < 4 * count) || 
                (i >= 6 * count && i < 8 * count) || 
                (i >= 10 * count && i < 12 * count) || 
                (i >= 14 * count && i < 16 * count) || 
                (i >= 18 * count && i < 20 * count)
            ) {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + count, i + count + 1, i + 1], '#4298FF'));
            }
        }
    }
    for(let i = 2; i < count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#EA53D7'));
        }
    }
    for(let i = 3; i < count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#EA53D7'));
        }
    }

    // UPPER PART
    for(let i = points.length / 2; i < points.length; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) || 
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) || 
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            }
        }
    }
    for(let i = points.length / 2 + 1; i < points.length; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            if(
                (i >= 22 * count && i < 24 * count) || 
                (i >= 26 * count && i < 28 * count) || 
                (i >= 30 * count && i < 32 * count) || 
                (i >= 34 * count && i < 36 * count) || 
                (i >= 38 * count && i < 40 * count)
            ) {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#EA53D7'));
            } else {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], '#4298FF'));
            }
        }
    }
    for(let i = points.length / 2 + 2; i < points.length / 2 + count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#EA53D7'));
        }
    }
    for(let i = points.length / 2 + 3; i < points.length / 2 + count; i+=4) {
        if(points[i + count + 1] && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + count, i + count + 1, i + 1],'#EA53D7'));
        }
    }

    //standart

    // for(let i = 0; i < points.length / 2 - count; i++) {
    //     if(points[i + count + 1] && (i + 1) % count !== 0) {
    //         polygons.push(new Polygon(
    //             [i, i + count, i + count + 1, i + 1]
    //         ));
    //     }
    // }
    // for(let i = points.length / 2; i < points.length; i++) {
    //     if(points[i + count + 1] && (i + 1) % count !== 0) {
    //         polygons.push(new Polygon([i, i + 1, i + count + 1, i + count]));
    //     }
    // }

    polygons.push(new Polygon([0, count - 1, 2 * count - 1, count], '#EA53D7'));
    polygons.push(new Polygon([points.length / 2 + count - 1, points.length / 2 + 2 * count - 1, points.length / 2 + count , points.length / 2], '#EA53D7'));
    
    return new Subject(points, edges, polygons, 'doubleHyperboloid');
}

export default doubleHyperboloid;