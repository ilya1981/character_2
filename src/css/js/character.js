const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
        if(name.length < 2 || name.length > 10) {
            throw new Error('нарушен лимит числа символов имени');
        }
        if(!types.includes(type)) {
            throw new Error('неправильный тип персонажа');
        }
       
    }

    
}




