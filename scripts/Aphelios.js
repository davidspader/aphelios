aphelios = {
    weapons: [
        ['calibrum', 50], 
        ['severum', 50], 
        ['gravitum', 50], 
        ['infernum', 50], 
        ['crescendum', 50], 
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
        this.weapons[4][1] = 50;
        this.changePrimaryWeapon();
    },

    ShootSpellCasting() {
        this.weapons[0][1] -= 10;
        if(this.weapons[0][1] <= 0){
            this.changeFirstWeaponToLastWeapon();
        }
    },
    
    shootBasicAttack() {
        this.weapons[0][1] --;
        if(this.weapons[0][1] <= 0){
            this.changeFirstWeaponToLastWeapon();
        }
    }
}
