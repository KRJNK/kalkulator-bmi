// BMI + Mifflin-St Jeor + cele kaloryczne.
(function () {
  'use strict';
  function fmt(n) { return String(Math.round(n)).replace('.', ','); }
  function render() {
    var wz = +document.getElementById('wz').value || 0;
    var wg = +document.getElementById('wg').value || 0;
    var wiek = +document.getElementById('wiek').value || 0;
    var pl = document.getElementById('pl').value;
    var akt = +document.getElementById('akt').value;
    var out = document.getElementById('out');
    var det = document.getElementById('detail');
    if (wz <= 0 || wg <= 0) { out.textContent = '—'; det.textContent = 'Podaj wzrost i wagę.'; return; }
    var bmi = wg / Math.pow(wz / 100, 2);
    var kat = bmi < 18.5 ? 'niedowaga' : bmi < 25 ? 'norma ✓' : bmi < 30 ? 'nadwaga' : 'otyłość';
    var bmr = pl === 'm' ? 10 * wg + 6.25 * wz - 5 * wiek + 5 : 10 * wg + 6.25 * wz - 5 * wiek - 161;
    var tdee = bmr * akt;
    out.textContent = 'BMI ' + (Math.round(bmi * 10) / 10).toString().replace('.', ',') + ' — ' + kat;
    det.textContent = 'Utrzymanie: ok. ' + fmt(tdee) + ' kcal · redukcja: ok. ' + fmt(tdee - 400) +
      ' kcal · masa: ok. ' + fmt(tdee + 300) + ' kcal. Szacunek, nie diagnoza.';
  }
  ['wz', 'wg', 'wiek', 'pl', 'akt'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', render);
  });
  render();
})();
