const rollD6 = (): number => Math.floor(Math.random() * (24 - 1) + 1);

const rollAttribute = (): Array<number> => [rollD6(), rollD6(), rollD6(), rollD6()];

const dropLowest = (rolls: Array<number>): Array<number> => {
  const smallest = Math.min(...rolls);
  return rolls.filter((i) => i !== smallest);
};

const reduceRolls = (rollArray: Array<number>): number => (
  rollArray.reduce((acc, curr) => acc + curr)
);

export { dropLowest, rollAttribute, reduceRolls };
