'use strict';
const fs = require('fs');

class Visitor {
    constructor(Name, Age, Visit_date, Time, Comments, Assistant) {
        this.fullName = Name;
        this.Age = Age;
        this.dateOfVisit = Visit_date;
        this.timeOfVisit = Time;
        this.comments = Comments;
        this.assistant = Assistant;
    }
    
    async save() {
            let file = this.fullName.replace(' ', '_').toLowerCase();
            fs.writeFile(`visitor_${file}.json`, JSON.stringify(this,null,2) , function (err) {
           if (err) throw err;
       });
       return(this);
    }

}


    async function load(fullName){
        let file = fullName.replace(' ', '_').toLowerCase();

        await fs.readFile(`visitor_${file}.json`, (err, data) => {
            if (err) throw err;
            console.log(data.toString());
        });
    }

    let alice = new Visitor('Alice Smith', 12, '12/03/2019', '13:26', 'yey!', 'Weston')
    alice.save();
    load("Alice Smith");

    let bob = new Visitor('Bob Marley', 26, '1/06/2020', '08:26', 'Boring', 'Mpumelelo')
    bob.save();
    load("Bob Marley");

    let charlie = new Visitor('Charlie Chaplin', 91, '16/09/2019', '10:15', 'Yeeeeeeeeeeeey!!!!', 'Tadiwa')
    charlie.save();
    load("Charlie Chaplin");

// module.exports={save,
//     load
// }