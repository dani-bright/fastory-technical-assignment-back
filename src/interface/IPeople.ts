import { IFilm } from './IFilm';
import { IPlanet } from './IPlanet';
import { ISpecie } from './ISpecie';
import { IStarship } from './IStarship';
import { IVehicle } from './IVehicle';

export interface IPeople {
    birth_year : string;
    eye_color : string;
    films : string[] | IFilm[];
    gender : string;
    hair_color : string;
    height : string;
    homeworld : string | IPlanet;
    mass : string;
    name : string;
    skin_color : string;
    created : Date;
    edited : Date;
    species : string[] | ISpecie[];
    starships : string[] | IStarship[];
    url : string;
    vehicles : string[] | IVehicle[];
}