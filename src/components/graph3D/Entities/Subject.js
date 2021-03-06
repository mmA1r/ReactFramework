import Point from "./Point";

class Subject {
    constructor(
        points = [], 
        edges = [], 
        polygons = [], 
        name = '', 
        animations = [], 
        center = new Point(0, 0, 0), 
    ) {
        this.points = points;
        this.edges = edges;
        this.polygons = polygons;
        this.name = name;
        this.animations = animations;
        this.center = center;
    }
}

export default Subject;