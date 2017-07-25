import { expect } from 'chai';

import {
  CLOSE_WIDGET_ALERT,
  closeWidgetAlert,
} from './alert';

describe('Alert actions', () => {
  it('should create action to close alert', () => {
    expect(closeWidgetAlert()).to.be.deep.equal({ type: CLOSE_WIDGET_ALERT });
  });
});
