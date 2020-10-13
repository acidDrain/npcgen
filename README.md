# Basic Reason Template

Hello! This project allows you to quickly get started with Reason and BuckleScript. If you wanted a more sophisticated version, try the `react` template (`bsb -theme react -init .`).

# Build

```bash
# for yarn
yarn build

# for npm
npm run build
```

# Build + Watch

```bash
# for yarn
yarn start

# for npm
npm run start
```

# NPC Gen

Generate NPC characters with optimal attributes based on Class.

## Requirements

- roll 4D6, (10) ten times
- drop lowest
- randomly distribute the results (Should work with or without Class, Race, etc. as some NPCs or creatures have no class or race.) to the nine ability scores based on priority set by Class or manual selection- the highest scores assigned to the priority attributes and the remaining rolls assigned to vacant ability scores randomly
- lowest roll result is ignored.

## Attributes

Melee, Ranged, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma, Luck

## Input Needs

Allow priority to be chosen. Selecting a Class clears then selects based on class but can be edited after class is selected. Race may give a bonus to an ability score. 

*Not Needed Atm but may need in future* Race, Background and/or Culture will set a bonus which automatically adds to the roll. 

A manual Bonus Field for adding in a desired bonus which is applied to all rolls and stacks with possible Racial, Background and Culture bonuses.

## Class 

- **Ability** Score Priority (First, Second, Third). Rest Randomized.
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

## Race Ability Score Bonuses

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

- Background Ability Score Bonuses: None atm
- Culture Ability Score Bonuses: None atm


