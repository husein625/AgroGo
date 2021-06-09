import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PlantModalComponent } from './plant-modal/plant-modal.component';
@Component({
  selector: 'app-plant-map',
  templateUrl: './plant-map.component.html',
  styleUrls: ['./plant-map.component.scss']
})
export class PlantMapComponent implements OnInit {
  @ViewChild('scroller1') scroller: ElementRef;

  searchText: any;
longitude = 18.206265;
latitude = 43.852383;
name : string;
image : string;
desiredWidthScale  = 40;
desiredHeightScale = 40;
iconUrl= {
  url: 'assets/plant.png',
  scaledSize: {
    width: this.desiredWidthScale,
    height: this.desiredHeightScale
  }
}

markers = [
  { latitude: 43.852383, longitude: 18.206265, name : "Allium melanantherum", image : "assets/allium_melanantherum.jpg",},
  { latitude: 43.252383, longitude: 18.001005, name : "Asperula hercegovina",image : "assets/Minuartia handelii.jpg",},
  { latitude: 43.252383, longitude: 18.402265, name : "Asperula purpurea",image : "assets/Asperula purpurea.jpg",},
  { latitude: 43.752383, longitude: 18.902265, name : "Asperula taurina",image : "assets/Asperula taurina.jpg",},
  { latitude: 44.752383, longitude: 18.502265, name : "Astrantia carniolica",image : "assets/Astrantia carniolica.jpg",},
  { latitude: 43.052383, longitude: 18.002265, name : "Campanula hercegovina",image : "assets/Campanula hercegovina.jpg",},
  { latitude: 44.952383, longitude: 16.202265, name : "Carex brachystachys",image : "assets/Carex brachystachys.jpg",},
  { latitude: 44.352383, longitude: 16.802265, name : "Carob",image : "assets/Carob.jpg",},
  { latitude: 43.551983, longitude: 18.292265, name : "Colchicum bulbocodium",image : "assets/Colchicum bulbocodium.jpg",},
  { latitude: 44.252383, longitude: 18.602265, name : "Dianthus freynii",image : "assets/Dianthus freynii.jpg",},
  { latitude: 44.752383, longitude: 18.202265, name : "Edraianthus sutjeskae",image : "assets/Edraianthus sutjeskae.jpg",},
  { latitude: 44.552383, longitude: 16.202265, name : "Euphorbia gregersenii",image : "assets/Euphorbia gregersenii.jpg",},


{ latitude: 43.652383, longitude: 17.202265, name : "Galium austriacum",image : "assets/Galium austriacum.jpg",},
{ latitude: 43.652383, longitude: 17.802265, name : "Galium sylvaticum",image : "assets/Galium sylvaticum.jpg",},
{ latitude: 44.652383, longitude: 17.802265, name : "Geum bulgaricum",image : "assets/Geum bulgaricum.jpg",},
{ latitude: 44.752383, longitude: 17.702265, name : "Galium austriacum",image : "assets/Galium austriacum.jpg",},
{ latitude: 44.252383, longitude: 17.602265, name : "Iris illyrica",image : "assets/Iris illyrica.jpg",},
{ latitude: 44.152383, longitude: 17.202265, name : "Lilium bosniacum",image : "assets/Lilium bosniacum.jpg",}
];

placeMarker(position: any) {
const lat = position.coords.lat;
const lng = position.coords.lng; 

this.markers.push({ latitude: lat, longitude: lng, name: this.name, image: this.image});
}

constructor(public dialog: MatDialog, private router: Router) {
  this.filteredStates = this.stateCtrl.valueChanges
  .pipe(
    startWith(''),
    map(state => state ? this._filterStates(state) : this.states.slice())
  );
}

  openDialog() {
    this.dialog.open(PlantModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  ngOnInit() { } 


 


  
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    { latitude: 43.852383, longitude: 18.206265, name : "Allium melanantherum", image : "assets/allium_melanantherum.jpg",},
    { latitude: 43.252383, longitude: 18.001005, name : "Asperula hercegovina",image : "assets/Minuartia handelii.jpg",},
    { latitude: 43.252383, longitude: 18.402265, name : "Asperula purpurea",image : "assets/Asperula purpurea.jpg",},
    { latitude: 43.752383, longitude: 18.902265, name : "Asperula taurina",image : "assets/Asperula taurina.jpg",},
    { latitude: 44.752383, longitude: 18.502265, name : "Astrantia carniolica",image : "assets/Astrantia carniolica.jpg",},
    { latitude: 43.052383, longitude: 18.002265, name : "Campanula hercegovina",image : "assets/Campanula hercegovina.jpg",},
    { latitude: 44.952383, longitude: 16.202265, name : "Carex brachystachys",image : "assets/Carex brachystachys.jpg",},
    { latitude: 44.352383, longitude: 16.802265, name : "Carob",image : "assets/Carob.jpg",},
    { latitude: 43.551983, longitude: 18.292265, name : "Colchicum bulbocodium",image : "assets/Colchicum bulbocodium.jpg",},
    { latitude: 44.252383, longitude: 18.602265, name : "Dianthus freynii",image : "assets/Dianthus freynii.jpg",},
    { latitude: 44.752383, longitude: 18.202265, name : "Edraianthus sutjeskae",image : "assets/Edraianthus sutjeskae.jpg",},
    { latitude: 44.552383, longitude: 16.202265, name : "Euphorbia gregersenii",image : "assets/Euphorbia gregersenii.jpg",},
    { latitude: 43.652383, longitude: 17.202265, name : "Galium austriacum",image : "assets/Galium austriacum.jpg",},
    { latitude: 43.652383, longitude: 16.202265, name : "Galium sylvaticum",image : "assets/Galium sylvaticum.jpg",},
    { latitude: 43.652383, longitude: 15.202265, name : "Geum bulgaricum",image : "assets/Geum bulgaricum.jpg",},
    { latitude: 43.652383, longitude: 14.202265, name : "Galium austriacum",image : "assets/Galium austriacum.jpg",},
    { latitude: 43.652383, longitude: 13.202265, name : "Iris illyrica",image : "assets/Iris illyrica.jpg",},
    { latitude: 43.652383, longitude: 12.202265, name : "Lilium bosniacum",image : "assets/Lilium bosniacum.jpg",}
  ];



    
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}



export interface State {
  latitude : number;
  longitude : number;

  name: string;
  image: string;


}