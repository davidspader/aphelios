aphelios = {
    weapons: [
        ['calibrum'], 
        ['severum'], 
        ['gravitum'], 
        ['infernum'], 
        ['crescendum'], 
    ],

    getWeaponsQueue() {
        return this.weapons;
    },

    getActiveWeapons(){
        return [this.weapons[0], this.weapons[1]];
    },

    changePrimaryWeapon() {
        this.weapons.splice(0, 0, this.weapons.splice(1, 1)[0])
    },

    changeFirstWeaponToLastWeapon() {
        this.weapons.push(this.weapons.splice(0,1)[0])
        this.changePrimaryWeapon();
    }
}

console.log(aphelios.getWeaponsQueue())