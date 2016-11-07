import {RouterModule, Routes} from "@angular/router";
import {SlashComponent} from "./components/diceware-component";
import {SplashComponent} from "./components/splash-component";


export const allAppComponents = [SlasheComponent, SplashComponent];

export const routes: Routes = [
	{path: "diceware/:roll", component: SlashComponent},
	{path: "", component: SplashComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);