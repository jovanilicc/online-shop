"use strict";

class Artikal {
  constructor(naziv, cena, opis) {
    this.naziv = naziv;
    this.cena = cena;
    this.opis = opis;
  }
}

const monitor = new Artikal("Monitor", 165, "24' Monitor FULL HD, 120HZ");
const tv = new Artikal("TV", 650, "OLED TV, FULL HD, SMART");
const mis = new Artikal("Mis", 20, "Logitech Gaming Mis, 12000DPI");

const artikli = [monitor, tv, mis];

const prikaziDetalje = (artikal) => {
  let info = document.querySelector(".info");
  info.innerHTML = "";
  let p = document.createElement("p");
  let detalji = `Naziv: ${artikal.naziv}<br/><br/>Cena: ${artikal.cena}$<br/><br/>Opis: ${artikal.opis}`;
  p.innerHTML = detalji;

  info.appendChild(p);
};

const dodajNoviArtikal = (artikli) => {
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", (e) => {
    const forma = document.querySelector("form");
    if (forma.checkValidity() === true) {
      e.preventDefault();
      const formData = new FormData(forma);

      let naziv = formData.get("naziv");
      let cena = parseInt(formData.get("cena"));
      let opis = formData.get("opis");

      const noviArtikal = new Artikal(naziv, cena, opis);

      artikli.push(noviArtikal);
      inicijalizujTabelu(artikli);
      forma.reset();
      e.stopPropagation();
    }
  });
};

const inicijalizujTabelu = (artikli) => {
  let tabela = document.querySelector(".table-data");

  tabela.innerHTML = "";

  for (let i = 0; i < artikli.length; i++) {
    let tr = document.createElement("tr");
    let br = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");

    br.textContent = i + 1;
    naziv.textContent = artikli[i].naziv;
    cena.textContent = artikli[i].cena;

    tr.appendChild(br);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    tr.addEventListener("click", (e) => {
      prikaziDetalje(artikli[i]);
    });

    tabela.appendChild(tr);
  }
};

inicijalizujTabelu(artikli);
dodajNoviArtikal(artikli);
