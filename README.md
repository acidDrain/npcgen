# NPC Generator

1. [Requirements](#requirements)
	1. [Attributes](#attributes)
	2. [Input Needs](#input-needs)
		1. [Future Requirements](#future-requirements)
	3. [Class](#class)
	4. [Race Ability Score Bonuses](#race-ability-score-bonuses)
2. [Getting Started](#getting-started)
	1. [Build](#build)
	2. [Build + Watch](#build--watch)

# NPC Gen

Generate `NPC` characters with optimal attributes based on `Class` (and `Race`?).

## Requirements

- Roll `4D6`, (10) ten times
- drop the lowest result
- randomly distribute the results (Should work with or without `Class`, `Race`, etc. as some `NPC`s or creatures have no class or race.)
  to the nine ability scores based on priority set by `Class` or manual selection
  the highest scores assigned to the priority attributes and the remaining rolls assigned to vacant ability scores randomly

### Attributes

- Melee
- Ranged
- Strength
- Dexterity
- Constitution
- Intelligence
- Wisdom
- Charisma
- Luck

### Input Needs

Allow the user to rank the priority of the attributes.
When a user selects a `Class`, the current attribute assignments should
clear/reset. The attributes should update to reflect the new
`Class` configuration priorities.
The user should be able to edit the `Class` attribute priorities
after a `Class` is selected.

The user chosen `Race` should support adding a bonus to ability score(s).

#### Future Requirements

Not needed now but may need in future.

Automatically calculate and add a bonus to the rolls based on

- `Race`
- `Background`
- `Culture`

Enable a manual `Bonus` field for adding in a desired bonus. The bonus 
will be applied to all rolls.
The bonus adds to any Racial, Background, or Culture bonuses.

### Ability Score Priorities

1. First
2. Second
3. Third
4. All other roll results are assigned randomly to the remaining attributes.

#### Class

- **Assassin**:
  1. Dexterity
  2. Melee
  3. Charisma
- **Barbarian**:
  1. Strength
  2. Constitution
  3. Wisdom
- **Bard**:
  1. Charisma
  2. Dexterity
  3. Intelligence
- **Cleric**:
  1. Wisdom
  2. Constitution
  3. Strength
- **Druid**:
  1. Wisdom
  2. Constitution
  3. Charisma
- **Fighter**:
  1. Melee
  2. Strength
  3. Constitution
- **Monk**:
  1. Dexterity
  2. Wisdom
  3. Melee
- **Paladin**:
  1. Strength
  2. Charisma
  3. Melee
- **Ranger**:
  1. Ranged
  2. Dexterity
  3. Wisdom
- **Shaman**:
  1. Wisdom
  2. Intelligence
  3. Melee
- **Sorcerer**:
  1. Charisma
  2. Constitution
  3. Ranged
- **Thief**:
  1. Dexterity
  2. Intelligence
  3. Charisma
- **Warlock**:
  1. Charisma
  2. Wisdom
  3. Constitution
- **Wizard**:
  1. Intelligence
  2. Wisdom
  3. Constitution

#### Race Ability Score Bonuses

- **Human**: +1 All ability scores
- **Elf**: +2 Dexterity
- **Dwarf**: +2 Constitution
- **Gnome**: +2 Intelligence
- **Halfling**: +2 Luck
- **Orc**: +2 Strength
- **Goblin**: +2 Dexterity
- **Minotaur**: +2 Strength
- **Satyr**: +2 Charisma
- **Firbolg**: +2 Wisdom


- Background Ability Score Bonuses: None (yet)
- Culture Ability Score Bonuses: None (yet)

## Getting Started

Hello! This project allows you to quickly get started with Reason and BuckleScript.

### Build

```bash
# for yarn
yarn build

# for npm
npm run build
```

### Build + Watch

```bash
# for yarn
yarn start

# for npm
npm run start
```

