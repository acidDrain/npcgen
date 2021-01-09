import { rollAttribute, RollSigma, rollD6 } from './roll.ts';

test('roll four D6 - ', () => {
  expect(rollD6()).toBeGreaterThanOrEqual(1);
});

