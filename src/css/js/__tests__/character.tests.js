import Character from "../character.js";
import Bowman from "../bowman.js";
import Daemon from "../daemon.js";
import Magician from "../magician.js";
import Swordsman from "../swordsman.js";
import Undead from "../undead.js";
import Zombie from "../zombie.js";






test('New Bowman', () => {
    const bowman = new Bowman('Bowy');
    expect(bowman).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Daemon', () => {
    const daemon = new Daemon('Daemy');
    expect(daemon).toEqual({
        name: 'Daemy',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Magician', () => {
    const magician = new Magician('Magy');
    expect(magician).toEqual({
        name: 'Magy',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('New Swordsman', () => {
    const swordsman = new Swordsman('Swordy');
    expect(swordsman).toEqual({
        name: 'Swordy',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('New Undead', () => {
    const undead = new Undead('Undy');
    expect(undead).toEqual({
        name: 'Undy',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('New Zombie', () => {
    const zombie = new Zombie('Zomy');
    expect(zombie).toEqual({
        name: 'Zomy',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});