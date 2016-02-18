import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

@RouteConfig([{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
}, {
    path: '/hero/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
}, {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
}])

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}