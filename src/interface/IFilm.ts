import { IPeople } from './IPeople';
import { IPlanet } from './IPlanet';
import { ISpecie } from './ISpecie';
import { IStarship } from './IStarship';
import { IVehicle } from './IVehicle';

export interface IFilm {
    characters : string[] | IPeople[];
    created : Date;
    director : string;
    edited : Date;
    episode_id : string;
    opening_crawl : string;
    planets : string[] | IPlanet[];
    producer : string;
    release_date : Date;
    species : string[] | ISpecie[];
    starships : string[] | IStarship[];
    title : string;
    url : string;
    vehicles : string[] | IVehicle[];
}