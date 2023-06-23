export class Vect{
    x : number;
    y : number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    distance(other: Vect): number{
        return Math.sqrt(
            Math.pow(this.x-other.x, 2)+Math.pow(this.y-other.y, 2)
        );
    }

    ccw(otherA: Vect, otherB: Vect, otherC: Vect): boolean {
        return (otherC.y - otherA.y) * (otherB.x - otherA.x) > (otherB.y - otherA.y) * (otherC.x - otherA.x)
    }
}