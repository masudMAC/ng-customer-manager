import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter, CUSTOMER_FEATURE_KEY, State as CustomerState} from './customers.reducer';

export const getCustomerState = createFeatureSelector<CustomerState>(CUSTOMER_FEATURE_KEY);

const {selectIds, selectAll, selectTotal} = adapter.getSelectors();

export const selectCustomers = createSelector(
  getCustomerState,
  selectAll
);

export const selectCustomersIds = createSelector(
  getCustomerState,
  selectIds
);

export const selectCustomersCount = createSelector(
  getCustomerState,
  (state: CustomerState) => state ? state.ids.length : 0
);

export const selectLoading = createSelector(
  getCustomerState,
  (state: CustomerState) => state ? state.loading : false
);

export const selectErrorMessage = createSelector(
  getCustomerState,
  (state: CustomerState) => state ? state.error : null
);
