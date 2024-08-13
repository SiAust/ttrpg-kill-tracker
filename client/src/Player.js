export function Player({characterName, player, level, clazz, race, killStats}) {
    this.characterName = characterName;
    this.player = player;
    this.level = level;
    this.clazz = clazz;
    this.race = race;
    this.killStats = killStats;

}

Player.prototype = {
    get totalKills() {
        return this.killStats.reduce((accumulator, current) =>
            accumulator + current.count, 0);
    }
}

export const TEST_PLAYERS = [
    {
        name: "Aragon", player: "Vigo", level: 100, clazz: "Fighter", race: "Human",
        killStats: [
            {id: 0, type: "goblin", count: 4},
            {id: 1, type: "orc", count: 2},
            {id: 2, type: "ogre", count: 1}]
    },
    {
        name: "Spock", player: "Leonard", level: 89, clazz: "Wizard", race: "Vulcan",
        killStats: [
            {id: 0, type: "goblin", count: 4},
            {id: 1, type: "orc", count: 2},
            {id: 2, type: "ogre", count: 1}]
    },
    {
        name: "Batman", player: "Bruce", level: 999, clazz: "Ninja", race: "Human",
        killStats: [
            {id: 0, type: "goblin", count: 4},
            {id: 1, type: "orc", count: 2},
            {id: 2, type: "ogre", count: 1}]
    }
];

export const THURSDAY_PLAYERS = [
    new Player({
        player: "Tony", characterName: "Toorg", level: 3, clazz: "Druid", race: "Leshy",
        killStats: [
            {id: 0, type: "goblin", count: 2},
            {id: 1, type: "orc", count: 2},
            {id: 2, type: "ogre", count: 1}]
        /*
            TODO Distinct kills with more detailed stats
            {id: 3, enemy: "ogre", subType: class?, killedWith: "short sword", date: DDMMYYYY, time: 12:23}
        */
    }),
    new Player({
        player: "Jon", characterName: "Haarsk", level: 3, clazz: "?", race: "Dwarf",
        killStats: [
            {id: 0, type: "goblin", count: 4},
            {id: 1, type: "orc", count: 6},
            {id: 2, type: "ogre", count: 1}]
    }),
    new Player({
        player: "Lewis", characterName: "Ulrock", level: 3, clazz: "Fighter", race: "Hobgoblin",
        killStats: [
            {id: 0, type: "goblin", count: 0},
            {id: 1, type: "orc", count: 2},
            {id: 2, type: "ogre", count: 7}]
    }),
    new Player({
        player: "Chantelle", characterName: "Selenite", level: 3, clazz: "Alchemist", race: "Fae?",
        killStats: [
            {id: 0, type: "goblin", count: 4},
            {id: 1, type: "orc", count: 2},
            {id: 2, type: "ogre", count: 1}]
    }),
    new Player({
        player: "Simon", characterName: "Tamasso", level: 3, clazz: "Fighter", race: "Human",
        killStats: [
            {id: 0, type: "goblin", count: 1},
            {id: 1, type: "orc", count: 1},
            {id: 2, type: "ogre", count: 1}]
    })
];