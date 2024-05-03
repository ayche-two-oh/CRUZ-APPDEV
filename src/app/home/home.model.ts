export class User { 
    id: string;
    gamename: string;
    publisher: string;
    ratings: number;
    isCompleted: boolean = false;
    released: Date;
    genres: string[] = [];


    

    constructor(id: string = '', gamename: string = '', publisher: string = '', ratings: number = 0, isCompleted: boolean = false, released: Date = new Date(), genres: string[] = []){
        this.id = id;
        this.genres = genres;
        this.gamename = gamename;
        this.publisher = publisher;
        this.ratings = ratings;
        this.released = released;
        this.isCompleted = isCompleted;

    }
} 

export interface iUser {
    id: string;
    gamename: string;
    publisher: string;
    ratings: number;
    isCompleted: boolean ;
    released: Date;
    genres: string[]
}
