function poeniZaOcjenu(ocjena) {
  switch (parseInt(ocjena)) {
    case 5: return 10;
    case 4: return 7;
    case 3: return 4;
    case 2: return 1;
    default: return 0;
  }
}

function izracunaj() {
  const avg7 = parseFloat(document.getElementById('avg7').value) || 0;
  const avg8 = parseFloat(document.getElementById('avg8').value) || 0;
  const avg9 = parseFloat(document.getElementById('avg9').value) || 0;
  const opstiUspjeh = 3 * (avg7 + avg8 + avg9);

  const mat = document.getElementById('matematika').value;
  const jez = document.getElementById('maternji').value;
  const fiz = document.getElementById('fizika').value;

  const maturaPoeni = poeniZaOcjenu(mat) + poeniZaOcjenu(jez) + poeniZaOcjenu(fiz);

  const luca = document.getElementById('luca').checked ? 12 : 0;

  const jez7 = parseInt(document.getElementById('maternji7').value) || 0;
  const jez8 = parseInt(document.getElementById('maternji8').value) || 0;
  const jez9 = parseInt(document.getElementById('maternji9').value) || 0;

  const mat7 = parseInt(document.getElementById('matematika7').value) || 0;
  const mat8 = parseInt(document.getElementById('matematika8').value) || 0;
  const mat9 = parseInt(document.getElementById('matematika9').value) || 0;

  const fiz7 = parseInt(document.getElementById('fizika7').value) || 0;
  const fiz8 = parseInt(document.getElementById('fizika8').value) || 0;
  const fiz9 = parseInt(document.getElementById('fizika9').value) || 0;

  const eng7 = parseInt(document.getElementById('engleski7').value) || 0;
  const eng8 = parseInt(document.getElementById('engleski8').value) || 0;
  const eng9 = parseInt(document.getElementById('engleski9').value) || 0;

  const ukupno = opstiUspjeh + maturaPoeni + luca +
    (jez7 + jez8 + jez9 + mat7 + mat8 + mat9 + fiz7 + fiz8 + fiz9 + eng7 + eng8 + eng9) / 2;

  document.getElementById('rezultat').innerText = ukupno.toFixed(2);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function promijeniSmjer(value) {
  if (value) {
    window.location.href = value;
  }
}
