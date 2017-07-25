import { expect } from 'chai';

import {
  REMOVE_WIDGET,
  removeWidget,
} from './remove';

const WIDGET_ID = '123';

describe('Remove actions', () => {
  it('should create action to remove widget', () => {
    expect(removeWidget(WIDGET_ID)).to.be.deep.equal({ type: REMOVE_WIDGET, id: WIDGET_ID });
  });
});
