'use strict';
const fs = require('fs');

//class with constructor that has objects
class Visitor {
    constructor(Name, Age, Visit_date, Time, Comments, Assistant) {
        this.fullName = Name;
        this.Age = Age;
        this.dateOfVisit = Visit_date;
        this.timeOfVisit = Time;
        this.comments = Comments;
        this.assistant = Assistant;
    }
    //save function that returns a promise
    async save() {
            let file = this.fullName.replace(' ', '_').toLowerCase();
            fs.writeFile(`visitor_${file}.json`, JSON.stringify(this,null,2) , function (err) {
           if (err) throw err;
       });
       return(this);
    }
}
    //load function that should return a promise
    async function load(fullName){
        let file = fullName.replace(' ', '_').toLowerCase();

            fs.readFile(`visitor_${file}.json`, (err, data) => {
            if (err) throw err;
            console.log(data.toString());
        });
    }
    
module.exports={
    Visitor
}
