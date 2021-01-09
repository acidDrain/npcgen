const generateRandomNumber = ({max = 6}): number => Math.floor(Math.random() * Math.floor(max));

const rollDice = (numSides: number): number => {
  let passed = false;
  while (!passed) {
    const result = generateRandomNumber({max: numSides});

    if (result > 0) {
      passed = true;
      return result;
    }

  }
}
const rollD6 = () => rollDice(6);

const rollD20 = () => rollDice(20);

const rollD8 = () => rollDice(8);

const rollD12 = () => rollDice(12);

/* What happens if there are *two* lowest values? i.e. [ 1, 1, 4, 7 ] */
/* Why not just generate three random numbers instead of generating   */
/* four and needing to deal with the complexity?                      */
// const dropLowest = (rolls: Array<number>): Array<number> =>
//   rolls.filter(i => i > Math.min(...rolls));

const rollAttribute = (): Array<number> => [rollD6(), rollD6(), rollD6()];

const RollSigma = (rollArray: Array<number>): number => (
  rollArray.reduce((acc, curr) => acc + curr)
);

export { rollAttribute, RollSigma, rollD6 };

