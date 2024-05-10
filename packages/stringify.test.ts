import {stable} from './stringify';

describe('readonly', () => {
  it('gets stuck when throwing readonly array of objects', () => {
    const obj = [
      {}
    ];
    const frozenObj = Object.freeze(obj);
    const stableObj = stable(frozenObj);
    console.log(stableObj)
  });
})