import {Component} from '@angular/core';
import {Integral} from '../models/Integral';
import {FunctionService} from './function.service';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MonteCarloFront';
  funct = '';
  max;
  min;
  iterations;
  integral: Integral;
  integr = '∫';
  res = '';
  resReal = '';
  data = '';
  debajo_positive: number;
  debajo_negative: number;
  encima: number;
  err = '';
  area_rect: number;
  abcdario = [];
  selectedValue = 'x';
  dx = 'd' + this.selectedValue;

  constructor(
    private fncS: FunctionService,
    private notifyS: NotificationService
  ) {
    for (let i = 97; i < 122; i++) {
      if (String.fromCharCode(i) != 'e') {
        this.abcdario.push(String.fromCharCode(i));
      }
    }
  }

  calc(): void {
    if (this.iterations <= 0) {
      this.notifyS.errParams('El número de iteraciones debe ser mayor a 0');
    } else {
      this.integral = {
        func: this.funct,
        max: this.max,
        min: this.min,
        n: this.iterations,
        varint: this.selectedValue
      };
      this.fncS.calc(this.integral).subscribe(integralResponse => {
        this.res = ' ≈ ' + integralResponse.res;
        this.data = integralResponse.img;
        this.debajo_negative = integralResponse.debajo_negative;
        this.debajo_positive = integralResponse.debajo_positive;
        this.encima = this.iterations - (this.debajo_positive + this.debajo_negative);
        this.area_rect = Math.abs(integralResponse.area_rect);
        this.resReal = `∫${this.funct}d${this.selectedValue}=${integralResponse.integrate_real}`;
        this.err = `Error % = ${Math.abs((integralResponse.integrate_real - integralResponse.res) / integralResponse.integrate_real) * 100}`;

      }, () => {
        this.clear();
        this.notifyS.errFunc();
      });
    }
  }

  onSubmit(): void {
    this.calc();
  }

  onChange(): void {
    this.dx = 'd' + this.selectedValue;
  }

  clear(): void {
    this.res = '';
    this.data = '';
    this.resReal = '';
    this.err = '';
    this.debajo_negative = 0;
    this.debajo_positive = 0;
    this.encima = 0;
    this.area_rect = 0;
  }

}
