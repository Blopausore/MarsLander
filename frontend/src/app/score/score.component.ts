import { Component } from '@angular/core';
import { Lander } from 'src/environment/lander';
import { Surface } from 'src/models/surface.model';
import { BORDER } from 'src/environment/mars';
import { Vect } from 'src/models/vect.model';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})


export class ScoreComponent {
  arguments: Function[] = [
    this.distance
  ]

  distance(lander: Lander, surface: Surface): number{
    let run: boolean = false;
    let [landingLeft, landingRight] = surface.getLanding();
    let from_point = new Vect(0, 0);
    let to_point = new Vect(0, 0);
    let end_point = new Vect(0, 0);
    let distance: number = 0;

    for (var point of surface.points){
      if (run){
        if (point == landingLeft){
          from_point = point;
          to_point = landingRight;
          end_point = landingLeft;
          distance = lander.pos.distance(landingRight);
          run = true;
        }
        else if (point == landingRight){
          from_point = landingRight;
          to_point = point;
          end_point = landingLeft;
          distance = landingLeft.distance(lander.pos);
        }
      }
      else{
        [from_point, to_point] = [to_point, point];
        distance += from_point.distance(to_point);
        if (point == end_point){break;}
      }
    }
    return distance;
  }

  landingSpeed(lander: Lander): number{
    return (
      Math.max(0, 100*(1 - Math.abs(lander.pos.x)/200)) +
      Math.max(0, 100*(1 - Math.abs(lander.pos.y)/200))
    );
  }
  
}
