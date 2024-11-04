/*
const jmeno = "Michal"
const elZprava = document.querySelector("#zprava")
let vek

// null = vypln
if(elZprava === null) {
  console.log("Pozadovany element neni nalezen")
} else {
  console.log(elZprava)
}

// undefined = nedefinovana hodnota
if(vek === undefined) { 
  vek = Number(prompt("Zadej svuj vek"))
} else { 
  console.log(vek)
}
*/

const jeSude = (cislo) => {
    if(cislo % 2 === 0) {
      return true
    } else { 
      return false
    }
  }
  
  const jeSude2 = (cislo) => {
    return cislo % 2 === 0 ? true : false
    //          vyraz      pravda   nepravda
  }
  
  const jeSude3 = (cislo) => cislo % 2 === 0 ? true : false 
  
  const jeSude4 = cislo => cislo % 2 === 0 ? true : false 
  
  console.log(jeSude(2))
  console.log(jeSude4(2))
  
  const generujNahodneCislo = () => {
    return Math.floor(Math.random() * 100)
  }
  
  const generujNahodneCislo2 = () => Math.floor(Math.random() * 100)
  
  console.log(generujNahodneCislo2())
  
  const produkt1 = {
    nazev: "mikrovlnka",
    cena: 500,
    kategorie: "domaci spotrebice"
  }

  
  const zobrazProdukt = produkt => {
    document.body.innerHTML = `
    <h2>${produkt.nazev}</h2>
    <p>cena: ${produkt.cena}</p>
    <p>kategorie: ${produkt.kategorie}</p>
    `
  }
  
  const vysledek = zobrazProdukt(produkt1)
  
  console.log(vysledek)

  /*
  const zprava = "Vitej na strance"
  const vek = 18
  
  if(vek >= 18) {
    document.body.innerHTML = zprava
  
    const preference = "vino"
    if(preference === "vino") {
      const sleva = 0.1
  
    } else {
  
    }
  } else {
    const zprava = "Nemuzes vstoupit"
  
    document.body.innerHTML = zprava
  }
    */