import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HobbyesComponent } from './components/hobbyes/hobbyes.component';
import { SomeInfoComponent } from './components/some-info/some-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { NgChartsModule } from 'ng2-charts';
import { DoughnutComponent } from './ui/doughnut/doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SkillsComponent,
    BenefitsComponent,
    HobbyesComponent,
    SomeInfoComponent,
    FooterComponent,
    WorkExperienceComponent,
    DoughnutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
