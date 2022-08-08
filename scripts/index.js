let changeWeapon = document.getElementById('change-weapon');

changeWeapon.onclick = function(){
    aphelios.changePrimaryWeapon();
    loadQueue();
};

let basicAttack = document.getElementById('basic-attack');
basicAttack.onclick = function(){
    aphelios.shootBasicAttack();
    loadQueue();
};

let skill = document.getElementById('skill');
skill.onclick = function(){
    aphelios.ShootSpellCasting();
    loadQueue();
};

changeWeapon.onclick = function(){
    aphelios.changePrimaryWeapon();
    loadQueue();
};

function loadQueue() {
    queue = aphelios.getWeaponsQueue();
    let weapons = document.getElementById('weapons');

    weapons.innerHTML = '';

    const ammo = document.createElement("span");
    ammo.innerHTML = queue[0][1]; 
    weapons.appendChild(ammo);

    for (let i = 0; i < queue.length; i++) {
        const img = document.createElement("img");
        img.src = "images/" + queue[i][0] + ".webp";
        
        if(i === 0) {
            img.className = "primary-weapon m-2";
        }else if(i === 1) {
            img.className = "secondary-weapon m-2";
        }else {
            img.className = "disable-weapon m-2";
        }
        
        weapons.appendChild(img);
    }

    console.log(queue);
}

loadQueue();