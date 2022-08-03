aphelios = {
    weapons: [ 
        ['Calibrum'], 
        ['Severum'], 
        ['Gravitum'], 
        ['Infernum'], 
        ['Crescendum'], 
    ],

    getActiveWeapons(){
        return [this.weapons[0], this.weapons[1]];
    },

    changePrimaryWeapon() {
        this.weapons.splice(0, 0, this.weapons.splice(1, 1)[0])
        return this.weapons;
    },

    changeFirstWeaponToLastWeapon() {
        this.weapons.push(this.weapons.splice(0,1)[0])
        this.changePrimaryWeapon();
        return this.weapons;
    }
}

console.log(aphelios.changeFirstWeaponToLastWeapon());