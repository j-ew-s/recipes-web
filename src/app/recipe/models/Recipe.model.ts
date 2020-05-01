export class  Recipe{

    public id : string;
    public name : string;
    public link : string;
    public description : string;
    public rate : number;
    public tags : string[];

    constructor(recipe : object){
        this.id = recipe['ID'];
        this.name = recipe['Name'];
        this.link = recipe['Link'];
        this.description = recipe['Description'];
        this.rate = recipe['Rate'];
        this.tags = recipe['Tags'];

    }

    getDescriptionShort(length : number){

        var descSubstring = this.description.substr(0,length);

        if(this.description.length > length)
            descSubstring = descSubstring +"...";

        return descSubstring;
    }

}