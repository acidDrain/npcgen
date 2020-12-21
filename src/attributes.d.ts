declare namespace NpcGen {
  enum AttributeNames {
    Charisma = "CHARISMA",
    Dexterity = "DEXTERITY",
    Melee = "MELEE",
    Intelligence = "INTELLIGENCE",
    Wisdom = "WISDOM",
    Constitution = "CONSTITUTION",
    Strength = "STRENGTH",
    Ranged = "RANGED",
  }

  interface Assassin {
    Primary: AttributeNames.Dexterity;
    Secondary: AttributeNames.Melee;
    Tertiary: AttributeNames.Charisma;
  }

  interface Barbarian {
    Primary: AttributeNames.Strength;
    Secondary: AttributeNames.Constitution;
    Tertiary: AttributeNames.Wisdom;
  }

  interface Bard {
    Primary: AttributeNames.Charisma;
    Secondary: AttributeNames.Dexterity;
    Tertiary: AttributeNames.Intelligence;
  }

  interface Cleric {
    Primary: AttributeNames.Wisdom;
    Secondary: AttributeNames.Constitution;
    Tertiary: AttributeNames.Strength;
  }

  interface Druid {
    Primary: AttributeNames.Wisdom;
    Secondary: AttributeNames.Constitution;
    Tertiary: AttributeNames.Charisma;
  }

  interface Fighter {
    Primary: AttributeNames.Melee;
    Secondary: AttributeNames.Strength;
    Tertiary: AttributeNames.Constitution;
  }

  interface Monk {
    Primary: AttributeNames.Dexterity;
    Secondary: AttributeNames.Wisdom;
    Tertiary: AttributeNames.Melee;
  }

  interface Paladin {
    Primary: AttributeNames.Strength;
    Secondary: AttributeNames.Charisma;
    Tertiary: AttributeNames.Melee;
  }

  interface Ranger {
    Primary: AttributeNames.Ranged;
    Secondary: AttributeNames.Dexterity;
    Tertiary: AttributeNames.Wisdom;
  }

  interface Shaman {
    Primary: AttributeNames.Wisdom;
    Secondary: AttributeNames.Intelligence;
    Tertiary: AttributeNames.Melee;
  }

  interface Sorcerer {
    Primary: AttributeNames.Charisma;
    Secondary: AttributeNames.Constitution;
    Tertiary: AttributeNames.Ranged;
  }

  interface Thief {
    Primary: AttributeNames.Dexterity;
    Secondary: AttributeNames.Intelligence;
    Tertiary: AttributeNames.Charisma;
  }

  interface Warlock {
    Primary: AttributeNames.Charisma;
    Secondary: AttributeNames.Wisdom;
    Tertiary: AttributeNames.Constitution;
  }

  interface Wizard {
    Primary: AttributeNames.Intelligence;
    Secondary: AttributeNames.Wisdom;
    Tertiary: AttributeNames.Constitution;
  }
}
