import {stable} from './stringify';

describe('readonly', () => {
  it('gets does not get stuck when running on a structuredClone', () => {
    const obj = [
      {}
    ];
    const frozenObj = Object.freeze(obj);
    const stableObj = stable(structuredClone(frozenObj));
    console.log(stableObj)
  });
})