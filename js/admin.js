const regiones = {
    "RM": ["Santiago", "Puente Alto", "Maipú"],
    "Araucanía": ["Temuco", "Angol"],
    "Ñuble": ["Chillán", "San Carlos"]
};

function loadRegiones() {
    const regSelect = document.getElementById('region');
    if(!regSelect) return;
    regSelect.innerHTML = '<option value="">-- Seleccione Región --</option>' + 
        Object.keys(regiones).map(r => `<option value="${r}">${r}</option>`).join('');
}

document.addEventListener('change', (e) => {
    if(e.target.id === 'region') {
        const comSelect = document.getElementById('comuna');
        const selectedReg = e.target.value;
        const comunas = regiones[selectedReg] || [];
        comSelect.innerHTML = '<option value="">-- Seleccione Comuna --</option>' + 
            comunas.map(c => `<option value="${c}">${c}</option>`).join('');
    }
});
window.onload = loadRegiones;