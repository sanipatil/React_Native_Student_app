import Realm from 'realm';

class Info extends Realm.Object{}
Info.schema = {
    name: 'Info', 
    properties: 
    {
        student_id: {type: 'int',   default: 0},
        student_name: 'string', 
        student_class: 'string',
        student_subject: 'string'
    }  
};

export default new Realm({schema: [Info], schemaVersion: 1});
