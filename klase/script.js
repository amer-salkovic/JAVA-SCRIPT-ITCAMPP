class Covek {

    constructor(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime
    }

    ispis(){
        console.log(`ime:${this.ime} prezime:${this.prezime}`);
    }
}

class Polaznik extends Covek {
    constructor(ime,prezime,godine) {
    super(ime, prezime);
    this.godine = godine;
}



ispis(){
    super.ispis();
    console.log(`Godine:${this.godine}`);
}

}



class Primer{
#godine;


constructor(pocetneGodine) {
    this.#godine = pocetneGodine;
  }

podmladi(broj){
    this.godine -= broj;

}

get godine(){
    return this.#godine
}



set godine(godine) {
    this.#godine = godine
}
}







  class Radnik {
    id;
    ime;
    prezime;
  
    constructor(id = 0, ime = "Tarik", prezime = "Ibrahimovic") {
      this.id = id;
      this.ime = ime;
      this.prezime = prezime;
    }
  
    ispis() {
      console.log(`ID: ${this.id}, Ime: ${this.ime}, Prezime: ${this.prezime}`);
    }
  }
  
  let polaznik = new Polaznik("Pera", "Peric", 25);
  
  polaznik.godine = 30;
  
  // let radnik = new Radnik(1);
  // let covek1 = new Covek("Tarik", "Ibrahimovic");
  
  // covek1.ime = "Dado";
  
  // covek1.ispis();
  
  // polazik1.ispis();
  
  // console.log(polazik1);