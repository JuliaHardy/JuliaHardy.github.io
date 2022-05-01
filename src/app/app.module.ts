import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { CountDownViewComponent } from './count-down-view/count-down-view.component'
import { EventFormComponent } from './count-down-view/event-form/event-form.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {
  MatMomentDateModule,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core'
import { DATE_FORMAT } from './app.constants'

import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './app-state'
import { MaxWidthDirective } from './ui-elements/max-width.directive'

@NgModule({
  declarations: [
    AppComponent,
    CountDownViewComponent,
    EventFormComponent,
    MaxWidthDirective,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
