import {
  Component,
  Output,
  EventEmitter,
  OnDestroy,
  HostListener,
} from '@angular/core'
import * as moment from 'moment'
import { Store } from '@ngrx/store'
import { takeUntil } from 'rxjs/operators'
import * as fromRoot from '../../app-state'
import { Subject } from 'rxjs'
import * as eventActions from '../../app-state/actions'

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnDestroy {
  @Output() newDataToDisplay = new EventEmitter<{
    name: string
    endDate: moment.Moment
  }>()

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') this.onSubmit()
  }

  public minDate = moment().add(1, 'days').format()
  public eventDate: moment.Moment | null = null
  public eventName = ''
  private destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(private readonly store: Store) {
    this.store
      .select(fromRoot.getCurrentEvent)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data.currentEvent) {
          this.eventName = data.currentEvent.name as string
          this.eventDate = moment(data.currentEvent.endDate)
          setTimeout(
            () =>
              this.newDataToDisplay.emit({
                name: this.eventName,
                endDate: this.eventDate!,
              }),
            0,
          )
        }
      })
  }

  public onSubmit() {
    if (this.eventDate && this.eventName) {
      this.newDataToDisplay.emit({
        name: this.eventName,
        endDate: this.eventDate,
      })
      this.store.dispatch(
        eventActions.createEvent({
          name: this.eventName,
          endDate: this.eventDate.format(),
        }),
      )
    }
  }

  public ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
