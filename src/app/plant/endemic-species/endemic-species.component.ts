import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-endemic-species',
  templateUrl: './endemic-species.component.html',
  styleUrls: ['./endemic-species.component.scss']
})
export class EndemicSpeciesComponent implements OnInit {

  constructor(private router: Router) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }
  ngOnInit(): void {
  }
  searchText: any;



  products = [
    new Product("Colchicum bulbocodium", "assets/Colchicum bulbocodium.jpg", "Livno", "Colchicum bulbocodium, the spring meadow saffron, is a species of alpine bulbous plant native to mountain ranges across Europe from the Pyrenees to the Caucasus (Spain, France, Italy, Switzerland, Austria, Hungary, Romania, the former Yugoslavia, Ukraine and southern European Russia). It is cultivated as an ornamental plant in many places. It has flowers considered ideal for the rock garden, which is beautiful en masse. The plant is a hardy spring flower bulb, very small in size, reaching about 7–10 cm high. From April to June, the strap-shaped leaves emerge with pink-to-purple crocus-like flowers, 3–8 cm in diameter. As all the species of the genus Colchicum, the species is a poisonous plant."),
    new Product("Dianthus freynii", "assets/Dianthus freynii.jpg", "Sokolac", "Dianthus freynii, or Freyn's carnation, in Bosnian Freynov karanfil or Freynov klinčić, is native endemic of Herzegovina karst, Bosnia and Herzegovina. It belongs to the family Caryophyllaceae (carnations)."),
    new Product("Dianthus knappii", "assets/Dianthus knappii.jpg", "Dinaric Alps", "Dianthus knappii, or Knapp's carnation, in Bosnian Knapov karanfil or Knapov klinčić, is a perennial herbaceous plant in the carnation family, Caryophyllaceae.[1] It is endemic at Dinaric mountains, on the border area between Herzegovina (Bosnia and Herzegovina) and Montenegro. In chromosome set has 2n = 30"),
    new Product("Diplotaxis muralis", "assets/Diplotaxis muralis.jpg", "Mostar", "Diplotaxis muralis, the annual wall-rocket, is a species of flowering plant in the family Brassicaceae. This plant is native to Europe, Asia, and Africa, but it is found throughout the temperate world, where it has naturalized. This is an erect mustard-like plant rarely reaching half a meter in height. It has lobed leaves and its stems are topped with dense inflorescences of yellow, or occasionally light purple, flowers with small oval petals and large anthers. The fruit is a podlike silique two to four centimeters long."),
    new Product("Edraianthus sutjeskae", "assets/Edraianthus sutjeskae.jpg", "Canyon of Sutjeska river", "Edraianthus sutjeskae, or Sutjeska's rockbell, is the endemic plant of the family Campanulaceae . This species is separated from populations of Edraianthus serpylifolius."),
    new Product("Euphorbia gregersenii", "assets/Euphorbia gregersenii.jpg", "Valley of Gostović, Kamenica stream", "This spurge is a perennial plant, herbaceous or with basically split, erected stems. Its height is around 25–55 cm, simple or branched, soft hairy, covered with numerous, sitting, oblong leaves . It length is about 4-4.5 cm, and about 1.2 to 2.7 cm wide. At the top is flare or slightly blunted, complete, with the upper on to the heart-shaped. The face is on all bare or sparsely hairy, and bazal leaf’s edge are soft hairy. The florescences are mostly with 4-5 rays. Bracts are ellipsoidal or ovoid oblong, naked - in length from about 2.7 to 5.3, rarely up to 6.5 cm wide and 1.2 to 2.6 (sometimes up to 3.5 cm). Brakteoles below the male flowers are anctast and integral or in 1-3-parts, yellow to lightgreen, hairy."),
    new Product("Galium austriacum", "assets/Galium austriacum.jpg", "Klekovača Mountain", "Galium austriacum, the Austrian bedstraw, is a plant species in the Rubiaceae. It was first described in 1773 by Austrian botanist Nicolaus Jacquin as part of his Florae Austriaceae (i.e., Flora of Austria), the Austrian Empire in 1773 having been rather larger than the present-day Republic of Austria. The species is found in mountainous regions of present-day Austria, Switzerland, Italy (Piemonte and Toscana), the Czech Republic, Slovakia, Hungary, and the former Yugoslavia."),
    new Product("Galium sylvaticum", "assets/Galium sylvaticum.jpg", "Šar Mountain", "Galium sylvaticum, commonly known as Scotch mist or wood bedstraw, is a plant species of the genus Rubiaceae. Its genus name, Galium, is derived from the Greek word for milk, apparently because some species have been used to curdle milk. It is native to central Europe: France, Italy, Germany, Poland, Hungary,the former Yugoslavia and smaller countries in between. It is also naturalized in scattered locations in North America (Maine, Vermont, Massachusetts, Connecticut, New York, Ontario, Michigan, Illinois, Wisconsin, Washington and Oregon). It is often found in anthropogenic (man-made or disturbed) habitats, forest edges, meadows and fields. It is a perennial, branching herb with thin stems. Its leaves are in whorls of six, each narrowly linear. Flowers are in open terminal panicles, white and four-pe"),
    new Product("Geum bulgaricum", "assets/Geum bulgaricum.jpg", "Bjelašnica Mountain", "Geum bulgaricum is a flowering plant species with small, bell-like yellow blossoms. It is native to Bulgaria, Albania, Montenegro, Kosovo and Bosnia and Herzegovina. In Bulgaria it is found in the Rila mountain range."),
    new Product("Iris illyrica", "assets/Iris illyrica.jpg", "Orjen Mountain", "Iris illyrica grows up to 40 cm in height. Its flowering period is May and June. Its best planting position is in full sun. The soil requirements are dry or average moist, fertile well drained soil. It is suitable in border and rock gardens. This plant produces seeds rarely. It produces usually ten seeds that ripen out in autumn."),
    new Product("Iris orjenii", "assets/Iris orjenii.jpg", "Orjen Mountain", "It has a fibrous and branched rhizome. The herbaceous leaves are bluish-green in color, and sword-shaped, and grow up to between 35–50 cm (14–20 in) long, and 2.5 to 3 cm in width.[2] It has a slender stem or peduncle, that can grow up to between 30–50 cm (12–20 in) tall,  and has several branches.  The inflorescence (or blooms), are produced in April,[1] or June,[2] they are fan-shaped and contains two or three white flowers, with a purple mark."),
    new Product("Lilium bosniacum", "assets/Lilium bosniacum.jpg", "Dinaric Mountain", "Lilium bosniacum is a lily native to Bosnia and Herzegovina. It's also known as Zlatni Ljiljan (Bosnian for golden lily) and Bosanski Ljiljan (Bosnian lily). L. bosniacum has often been lumped and split and lumped again. Some results of molecular studies support it as an infraspecific taxon of Lilium carniolicum. Lilium bosniacum, together with Lilium albanicum and Lilium jankae have been treated as varieties of Lilium carniolicum. However, extensive DNA-analyses have shown that this group is polyphyletic."),


    ];



    states: State[] = [
      {  name : "Allium melanantherum", image : "assets/allium_melanantherum.jpg", location : "Prenj, Čvrsnica, Čabulja", description: " Lilium bosniacum − je vrsta ljiljana u BiH. Dugo je smatran podgrupom vrsta Lilium pyrenaicum i/ili Lilium carniolicum, ali su 2005. bosanskohercegovačke populacije izdvojene u posebnu vrstu."},
      {  name : "Asperula hercegovina",image : "assets/Minuartia handelii.jpg", location : "Bosnian stenoendem", description : " Lilium bosniacum − je vrsta ljiljana u BiH. Dugo je smatran podgrupom vrsta Lilium pyrenaicum i/ili Lilium carniolicum, ali su 2005. bosanskohercegovačke populacije izdvojene u posebnu vrstu."},
      {  name : "Asperula purpurea",image : "assets/Asperula purpurea.jpg", location : "Endemic South East Dinars", description : "  Lilium bosniacum − je vrsta ljiljana u BiH. Dugo je smatran podgrupom vrsta Lilium pyrenaicum i/ili Lilium carniolicum, ali su 2005. bosanskohercegovačke populacije izdvojene u posebnu vrstu."},
    ];


    stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;


    
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }


}


export interface State {
  name: string;
  image: string;
  location: string;
  description : string;

}


export class Product { 
 
  constructor( name: string ,   image:string, location : string, description: string) {
      this.name = name;
      this.image = image;
      this. location = location;
      this.description = description;
  }

  name : string;
  image : string;
  location : string;
  description : string;


}