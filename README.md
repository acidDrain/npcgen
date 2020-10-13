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
Selecting a `Class` clears then selects based on class but can be edited after class is selected.
Race may give a bonus to an ability score.

#### Future Requirements

Not needed now but may need in future.

Automatically calculate and add a bonus to the rolls based on

- Race
- Background
- Culture

Enable a manual `Bonus` field for adding in a desired bonus. The bonus 
will be applied to all rolls.
The bonus adds to any Racial, Background, or Culture bonuses.

### Class

- **Ability** Score Priority (First, Second, Third).
  All other roll results should be assigned randomly to the remaining attributes.
- **Assassin**: Dexterity, Melee, Charisma
- **Barbarian**: Strength, Constitution, Wisdom
- **Bard**: Charisma, Dexterity, Intelligence
- **Cleric**: Wisdom, Constitution, Strength
- **Druid**: Wisdom, Constitution, Charisma
- **Fighter**: Melee, Strength, Constitution
- **Monk**: Dexterity, Wisdom, Melee
- **Paladin**: Strength, Charisma, Melee
- **Ranger**: Ranged, Dexterity, Wisdom
- **Shaman**: Wisdom, Intelligence, Melee
- **Sorcerer**: Charisma, Constitution, Ranged
- **Thief**: Dexterity, Intelligence, Charisma
- **Warlock**: Charisma, Wisdom, Constitution
- **Wizard**: Intelligence, Wisdom, Constitution

### Race Ability Score Bonuses

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

