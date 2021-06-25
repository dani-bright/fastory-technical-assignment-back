import { IFilm } from './IFilm';
import { IPeople } from './IPeople';

export interface IPlanet {
    climate : string;
    created : Date;
    diameter : string;
    edited : Date;
    films : string[] | IFilm[];
    gravity : string;
    name : string;
    orbital_period : string;
    population : string;
    residents : string[] | IPeople[];
    rotation_period : string;
    surface_water : string;
    terrain : string;
    url : string;
}