const distanza = parseInt(prompt("Quanti chilometri devi percorrere?"))
const eta = parseInt(prompt("Quanti anni hai?"))
const prezzo_km = (0.21 * distanza)

if (eta < 18)
    console.log("Grazie allo sconto del 20% per i minorenni il biglietto ti costerà: " + parseFloat(prezzo_km - (prezzo_km / 100 * 20)).toFixed(2) + " €");

if (eta > 65)
    console.log("Grazie allo sconto del 40% per gli over 65 il biglietto ti costerà: " + parseFloat(prezzo_km - (prezzo_km / 100 * 40)).toFixed(2) + " €");

if (eta >= 18 && eta <= 65)
console.log ("Il biglietto ti costerà: " + parseFloat(prezzo_km).toFixed(2)  + " €");