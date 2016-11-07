import {Component} from "@angular/core";

@Component({
	selector: 'quickstart-app',
	templateUrl: './templates/quickstart-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}