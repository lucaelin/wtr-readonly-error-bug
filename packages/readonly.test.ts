import { expect } from '@open-wc/testing';

describe('readonly', () => {
  it('gets stuck when throwing readonly array of objects', () => {
    const obj = [
			{}
		];
    const frozenObj = Object.freeze(obj);
    expect(frozenObj).to.be.empty;
  });
})