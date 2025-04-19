function createMolecule() {
    let newMolecule = document.createElement('div');
    newMolecule.classList.add('circles');

    let randomY = Math.random() * 390;
    let randomX = Math.random() * 600;

    newMolecule.style.top = `${randomY}px`;
    newMolecule.style.left = `${randomX}px`;
    
    return newMolecule
}

let region1 = document.getElementById('region1')

for (let i = 0; i < 20; i++){
    region1.appendChild(createMolecule())
}