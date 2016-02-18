import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/hero.component.html',
    styleUrls: ['app/hero.component.css']
})

export class HeroesComponent implements OnInit {

    public title = 'Tour of Heroes';
    public heroes:Hero[];

    selectedHero:Hero;

    constructor(private _router:Router,
                private _heroService:HeroService) {
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail() {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this._router.navigate(link);
    }
}
