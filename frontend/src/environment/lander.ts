/* Gravity functionnment */

import { Action } from "src/models/action.model";
import { Vect } from "src/models/vect.model";
import { Mars, GRAVITY } from "./mars";

export class Lander {
    action :Action;
    pos: Vect;
    speed: Vect;
    rotation : Vect;
    power : Vect;

    constructor(action: Action, pos: Vect, speed: Vect, rotation: Vect, power: Vect){
        this.action = action
        this.pos = pos;
        this.speed = speed;
        this.rotation = rotation;
        this.power = power;
    }

    updateAction(derivativeAction: Action){
        this.action =  { 
            power: Math.min(4, Math.max(0, derivativeAction.power+this.action.power)),
            angle: Math.min(90, Math.max(-90, derivativeAction.angle+this.action.angle))   
        };
    }

    gravity(): void{
        this.power.x = - this.action.power * Math.sin(this.action.angle*Math.PI/180);
        this.power.y = this.action.power * Math.cos(this.action.angle*Math.PI/180) + GRAVITY;
    } 
}

