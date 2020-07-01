import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { DiamondFabricatorComponent } from './diamond-fabricator/diamond-fabricator.component';
import { IsogrammTesterComponent } from './/isogramm-tester/isogramm-tester.component';
import { StringReverserComponent } from './string-reverser/string-reverser.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'diamond-fabricator', component: DiamondFabricatorComponent },
  { path: 'isogramm-tester', component: IsogrammTesterComponent },
  { path: 'string-reverser', component: StringReverserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
