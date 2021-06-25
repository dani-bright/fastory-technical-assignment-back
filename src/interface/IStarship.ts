import { IFilm } from './IFilm';
import { IPeople } from './IPeople';

export interface IStarship {
    MGLT : string;
    cargo_capacity : string;
    consumables : string;
    cost_in_credits : string;
    created : Date;
    crew : string;
    edited : Date;
    hyperdrive_rating : string;
    length : string;
    manufacturer : string;
    max_atmosphering_speed : string;
    model : string;
    name : string;
    passengers : string;
    films : string[] | IFilm[];
    pilots : string[] | IPeople[];
    starship_class : string;
    url : string;
}