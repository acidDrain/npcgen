import { dropLowest, reduceRolls, rollAttribute } from './util/roll';

const attributes = (): Array<number> => [
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
  reduceRolls(dropLowest(rollAttribute())),
];

const Assassin = {
  Dexterity: 0,
  Melee: 1,
  Charisma: 2,
};

const Barbarian = {
  Strength: 0,
  Constitution: 1,
  Wisdom: 2,
};

const Bard = {
  Charisma: 0,
  Dexterity: 1,
  Intelligence: 2,
};

const Cleric = {
  Wisdom: 0,
  Constitution: 1,
  Strength: 2,
};

const Druid = {
  Wisdom: 0,
  Constitution: 1,
  Charisma: 2,
};

const Fighter = {
  Melee: 0,
  Strength: 1,
  Constitution: 2,
};

const Monk = {
  Dexterity: 0,
  Wisdom: 1,
  Melee: 2,
};

const Paladin = {
  Strength: 0,
  Charisma: 1,
  Melee: 2,
};

const Ranger = {
  Ranged: 0,
  Dexterity: 1,
  Wisdom: 2,
};

const Shaman = {
  Wisdom: 0,
  Intelligence: 1,
  Melee: 2,
};

const Sorcerer = {
  Charisma: 0,
  Constitution: 1,
  Ranged: 2,
};

const Thief = {
  Dexterity: 0,
  Intelligence: 1,
  Charisma: 2,
};

const Warlock = {
  Charisma: 0,
  Wisdom: 1,
  Constituton: 2,
};

const Wizard = {
  Intelligence: 0,
  Wisdom: 1,
  Constitution: 2,
};
