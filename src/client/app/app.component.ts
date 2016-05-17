import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { AboutComponent } from './+about/index';
import { HomeComponent } from './+home/index';
import { NameListService, NavbarComponent, ToolbarComponent } from './shared/index';
import {DeveloperComponent} from './+developer/developer.component';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@Routes([
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/developpeurs',
    component: DeveloperComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
])
/**
 * This class represents the main application component.
 * Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy
 * loaded components (HomeComponent, AboutComponent).
 */
export class AppComponent {}
