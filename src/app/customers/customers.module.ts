import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/customers.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CustomersEffects} from './store/customers.effects';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CustomersRoutingModule.components],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
    StoreModule.forFeature('catalog-customers', reducer),
    EffectsModule.forFeature([CustomersEffects])
  ]
})
export class CustomersModule {
}
