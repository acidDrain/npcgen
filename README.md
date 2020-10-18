# NPC Generator

- [Requirements](#requirements)
	- [Generating `Ability Scores`](#generating-ability-scores)
	- [Assigning Scores](#assigning-scores)
	- [Ability Scores](#ability-scores)
	- [Input Needs](#input-needs)
		- [Future Requirements](#future-requirements)
	- [Ability Score Priorities](#ability-score-priorities)
		- [`Class`](#class)
			- [Assassin](#assassin)
			- [Barbarian](#barbarian)
			- [Bard](#bard)
			- [Cleric](#cleric)
			- [Druid](#druid)
			- [Fighter](#fighter)
			- [Monk](#monk)
			- [Paladin](#paladin)
			- [Ranger](#ranger)
			- [Shaman](#shaman)
			- [Sorcerer](#sorcerer)
			- [Thief](#thief)
			- [Warlock](#warlock)
			- [Wizard](#wizard)
	- [`Ability` Score Bonuses](#ability-score-bonuses)
		- [`Race`](#race)
			- [Human](#human)
			- [Elf](#elf)
			- [Dwarf](#dwarf)
			- [Gnome](#gnome)
			- [Halfling](#halfling)
			- [Orc](#orc)
			- [Goblin](#goblin)
			- [Minotaur](#minotaur)
			- [Satyr](#satyr)
			- [Firbolg](#firbolg)
			- [Miscellaneous](#miscellaneous)
- [Getting Started](#getting-started)
	- [Usage](#usage)

# NPC Gen

Generate `NPC` characters with optimal attributes based on `Class` (and
`Race`?).

## Requirements

We need to generate (9) `Ability Scores` for our character. In the physical world, we
roll dice. Here, we'll mimick that process by generating random numbers.

To generate these `Ability Scores` for our character, we will perform the
following steps for each `Ability Score`.

### Generating `Ability Scores`

To generate an `Ability Score`, follow these steps:

1. generate four random numbers between 1 and 6
2. drop a single result that is the lowest
3. add the three remaining values

Once we have generated (9) `Ability Scores`, we can begin assigning them.

### Assigning Scores

- assign the resulting scores to `Ability Scores` according to `Class` priorities
  or custom user configuration, with highest scores assigned to lower priority
  (e.g. scores: 24, 11 -> Priority 1 = 24, Priority 2 = 11)
- Since there are (9) `Ability Scores` to assign, if there are less than (9)
  `Ability Scores` configured with a priority, after assigning highest scores based
  on priorities, randomly assign the remaining scores to `Ability Scores` missing a
  configured priority
- support `undefined` `Class`, `Race`. Some `NPC`s have no `Class` or `Race`

### Ability Scores

- `Melee`
- `Ranged`
- `Strength`
- `Dexterity`
- `Constitution`
- `Intelligence`
- `Wisdom`
- `Charisma`
- `Luck`

### Input Needs

Allow the user to rank the priority of the `Ability Scores`. When a user selects a
`Class`, the current `Ability` assignments should clear/reset. The
`Ability`s should update to reflect the new `Class` priority configuration.

The `Class` `Ability` priorities should be user modifiable after selecting a
`Class`.

The user chosen `Race` should support adding a bonus to `Ability` score(s).

#### Future Requirements

Automatically calculate and add a bonus to the rolls based on

- `Race`
- `Background`
- `Culture`

Support a user-configurable `bonus` field for adding bonuses to the `Ability`
scores.

- The bonus will be applied to all rolls.
- The bonus adds to any `Racial`, `Background`, or `Culture` bonuses.

### Ability Score Priorities

1. First
2. Second
3. Third
4. All other roll results are assigned randomly to the remaining `Ability`s.

#### `Class`

##### Assassin

1. `Dexterity`
2. `Melee`
3. `Charisma`

##### Barbarian

1. `Strength`
2. `Constitution`
3. `Wisdom`

##### Bard

1. `Charisma`
2. `Dexterity`
3. `Intelligence`

##### Cleric

1. `Wisdom`
2. `Constitution`
3. `Strength`

##### Druid

1. `Wisdom`
2. `Constitution`
3. `Charisma`

##### Fighter

1. `Melee`
2. `Strength`
3. `Constitution`

##### Monk

1. `Dexterity`
2. `Wisdom`
3. `Melee`

##### Paladin

1. `Strength`
2. `Charisma`
3. `Melee`

##### Ranger

1. `Ranged`
2. `Dexterity`
3. `Wisdom`

##### Shaman

1. `Wisdom`
2. `Intelligence`
3. `Melee`

##### Sorcerer

1. `Charisma`
2. `Constitution`
3. `Ranged`

##### Thief

1. `Dexterity`
2. `Intelligence`
3. `Charisma`

##### Warlock

1. `Charisma`
2. `Wisdom`
3. `Constitution`

##### Wizard

1. `Intelligence`
2. `Wisdom`
3. `Constitution`


### `Ability` Score Bonuses

#### `Race`

##### Human

+1 All `Ability` scores

##### Elf

+2 `Dexterity`

##### Dwarf

+2 `Constitution`

##### Gnome

+2 `Intelligence`

##### Halfling

+2 `Luck`

##### Orc

+2 `Strength`

##### Goblin

+2 `Dexterity`

##### Minotaur

+2 `Strength`

##### Satyr

+2 `Charisma`

##### Firbolg

+2 `Wisdom`

##### Miscellaneous

- `Background` `Ability` Score Bonuses: None (yet)
- `Culture` `Ability` Score Bonuses: None (yet)

## Getting Started

This project uses [`deno`](https://deno.land/manual@v1.4.6/introduction).

### Usage

To use this project, use:

```bash
$ deno run src/roll.ts
...
```

