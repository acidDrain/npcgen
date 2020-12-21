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

  const AllAttributes = [
    AttributeNames.Charisma,
    AttributeNames.Dexterity,
    AttributeNames.Melee,
    AttributeNames.Intelligence,
    AttributeNames.Wisdom,
    AttributeNames.Constitution,
    AttributeNames.Strength,
    AttributeNames.Ranged,
  ];

