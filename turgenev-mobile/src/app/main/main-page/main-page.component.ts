import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        $['HSCore'].components.HSSelect.init('.js-custom-select');
    }

}
