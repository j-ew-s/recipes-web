export class  Recipe{

    public id : string;
    public name : string;
    public link : string;
    public description : string;
    public rate : number = 0;
    public tags : string[] = [];

    constructor(recipe : object){
       
        this.id = recipe['ID'] ? recipe['ID'] : recipe['id'];
        this.name = recipe['Name'] ? recipe['Name'] : recipe['name'];
        this.link = recipe['Link'] ? recipe['Link'] : recipe['link'] ;
        this.description = recipe['Description'] ? recipe['Description'] : recipe['description'];
        
        let rate = recipe['Rate'] ? recipe['Rate'] : recipe['rate'];
        let tagValue = recipe['Tags'] ? recipe['Tags'] : recipe['tags'];

        this.setTags(tagValue);
        this.setRate(rate);
    }

    setTags(tags: string[]): void{
        
        if(tags != undefined){
            tags.forEach(tag => {     
                if(tag != "")
                    this.tags.push(tag);
            });
        }
    }

    setRate(rate : string){

        if(rate != "" && rate !=" ")
            this.rate = Number(rate);
    }

    getDescriptionShort(length : number){
        
        if(this.description != undefined){
            var descSubstring = this.description.substr(0,length);

            if(this.description.length > length)
                descSubstring = descSubstring +"...";

            return descSubstring;
        }
    }

}