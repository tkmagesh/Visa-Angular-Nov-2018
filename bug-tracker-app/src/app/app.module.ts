import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperationsService } from './bugTracker/services/bugOperations.service';


import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';
import { BugItemComponent } from './bugTracker/views/bugItem.component';
import { BugDisplayComponent } from './bugTracker/views/bugDisplay.component';

import { UtilsModule } from './utils/utils.module';

import { BugApiService } from './bugTracker/services/bugApi.service';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , BugItemComponent
    , BugDisplayComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
  	BugOperationsService
    , BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
