import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';

import { ComponentsPage } from './components.page';
import { TabsComponent } from '../tabs/tabs.component';
import { ModalComponent } from '../modal/modal.component';
import { SliderComponent } from '../slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule
  ],
  declarations: [ComponentsPage, TabsComponent, ModalComponent, SliderComponent]
})
export class ComponentsPageModule {}
