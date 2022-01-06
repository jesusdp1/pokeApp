import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from 'src/app/models/pokemon';
import { PokeService } from 'src/app/services/pokeService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poke-app',
  templateUrl: './poke-app.component.html',
  styleUrls: ['./poke-app.component.css']
})
export class PokeAppComponent implements OnInit {

  pokemonForm: FormGroup = new FormGroup({
  pokeInput: new FormControl(''),

  });
  pokemon:Pokemon= new Pokemon;
  constructor(private service:PokeService, private formBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pokemonForm = this.formBuilder.group({
      pokeInput: ['']
     
    });


  }
  open(content:any) {
    this.modalService.open(content, { size: 'lg' });
  } 
  
  
   getPokemon(name: string) {
     this.pokemon = new Pokemon;
     if(name !==""){
      this.service.getPokemon(name).subscribe(response => {
        if(response !== null){
          this.pokemon = response;
  
        }
  
      });
     }else{
      Swal.fire('',  "Please enter a value", 'error')

     }

  }
  onSubmit() {
    
    }
    getInputValue(): string{

      
      let inputValue: string =   this.pokemonForm.get('pokeInput')?.value;
      if (inputValue === null){
        inputValue = ""
      }
      return inputValue;
    }

}
  
    
 