import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [
    'home.component.scss'
  ]
})
export class HomeComponent {
  constructor() {}

  public heros = [
      {
        role:"Guerrier", 
        name:"La voie des Oni", 
        desc:"Les Oni possède une forte attaque et une defense physique importante concervant une moyenne vitesse. Il reste cependant vulnérable aux sorts.",
        media: "../../../assets/img/oni.png",
        mediaText: "image d' oni"
      },
      {
        role:"Enchantress", 
        name:"Les enfants d'Amaterasu", 
        desc:"L'enchantress est cappable d'envouter ces ennemies pendant un court instant, peu se soigner, guérrir de poison et contrôler la faune et la flore.",
        media: "../../../assets/img/Amaterasu.png",
        mediaText: "image d' Amaterasu"
      },      {
        role:"Sorcière", 
        name:"Les dissiples d'Izanami", 
        desc:"Les dissiples d'izanami peuvent utilisée des sorts d'ombres, de feu et de poison, bien que vulnérable aux corps à corps.",
        media: "../../../assets/img/sorcière.jpg",
        mediaText: "image de sorcière"
      },
      {
        role:"Espionne", 
        name:"Les Tengu de la forêt noir", 
        desc:"Peuple enracinée aux mont Fuji depuis des décennies, les Tengu excelles dans la discrétion ils sont naturellement aussi rapide et précis.",
        media: "../../../assets/img/tengu.jpg",
        mediaText: "image de Tengu"
      }
    ]
  };
