import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  constructor() { }

  public calculateRemainingTime(endDate: moment.Moment): number {
    const currentTime = moment();
    return endDate.diff(currentTime, 'seconds');
  }

  public formatRemainingTimeString(timeInSeconds: number): string {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor(timeInSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(timeInSeconds % 3600 / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${days} days, ${hours} h, ${minutes} m, ${seconds} s`
  }
}
