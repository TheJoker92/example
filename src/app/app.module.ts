import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './page-container/header/header.component';
import { PortalNavigationComponent } from './page-container/portal-navigation/portal-navigation.component';
import { FunctionMenuComponent } from './page-container/function-menu/function-menu.component';
import { ServiceSearchPanelComponent } from './page-container/service-search-panel/service-search-panel.component';
import { SchedulerComponent } from './page-container/scheduler/scheduler.component';
import { EmploysListComponent } from './page-container/employs-list/employs-list.component';
import { TeamsListComponent } from './page-container/teams-list/teams-list.component';
import { ActionsBarComponent } from './page-container/actions-bar/actions-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,
    PortalNavigationComponent,
    FunctionMenuComponent,
    ServiceSearchPanelComponent,
    SchedulerComponent,
    EmploysListComponent,
    TeamsListComponent,
    ActionsBarComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
