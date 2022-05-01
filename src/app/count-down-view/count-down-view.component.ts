import { Component, OnDestroy } from '@angular/core'
import * as moment from 'moment'
import { CountDownService } from './count-down.service'

@Component({
  selector: 'count-down-view',
  templateUrl: './count-down-view.component.html',
  styleUrls: ['./count-down-view.component.scss'],
})
export class CountDownViewComponent implements OnDestroy {
  public eventName = ''
  public formattedRemainingTime = ''
  private remainingSeconds = 0
  public interval = 0

  constructor(private countDownService: CountDownService) {}

  public displayEventData($event: { name: string; endDate: moment.Moment }) {
    this.eventName = $event.name
    this.remainingSeconds = this.countDownService.calculateRemainingTime(
      $event.endDate,
    )
    this.formattedRemainingTime =
      this.countDownService.formatRemainingTimeString(this.remainingSeconds)
    this.countDown()
  }

  private processTime(): void {
    if (!this.remainingSeconds) {
      clearInterval(this.interval)
      return
    }
    this.remainingSeconds -= 1
    this.formattedRemainingTime =
      this.countDownService.formatRemainingTimeString(this.remainingSeconds)
  }

  private countDown(): void {
    if (this.interval) clearInterval(this.interval)
    this.interval = setInterval(() => this.processTime(), 1000)
  }

  public ngOnDestroy(): void {
    if (this.interval) clearInterval(this.interval)
  }
}
