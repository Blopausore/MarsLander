import { Lander } from "src/environment/lander";
import { Vect } from "./vect.model";


export class Surface {
    points : Vect[];
    landing : number;
    constructor(points: Vect[]=[]){
        this.points = points; 
        this.landing=0; 
        for (let i=0; i<this.points.length-1; i++){
            if (this.points[i].y == this.points[i+1].y){
                this.landing = i;
                return;
            }
        };
    }
    getLanding(): Vect[]{
        return [this.points[this.landing], this.points[this.landing+1]];
    };
    
    is_landing(landerHigh: Vect, landerLow: Vect): boolean{
        let [landerLeft, landerRight] = this.getLanding();
        return (Vect.ccw(landerHigh, landerLeft, landerRight) != Vect.ccw(landerLow, landerLeft, landerRight)
            && Vect.ccw(landerHigh, landerLow, landerLeft) != Vect.ccw(landerHigh, landerLow, landerRight));
    }
};