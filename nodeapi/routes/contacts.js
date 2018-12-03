/**
 * Created by m17 on 18/02/2014.
 */
var contacts =
[
    { id:1, nom:"ALLIOD", prenom:"Sebastien" },
    { id:2, nom:"MANNEVILLE", prenom:"Fabien" },
    { id:3, nom:"ROSSIGNOL", prenom:"Laurent" },
    { id:4, nom:"LEBADEZET", prenom:"Vincent" },
    { id:5, nom:"DEHAUSSY", prenom:"Matthieu" }
];

exports.getContacts = function (req, res) {

    res.json( contacts );
};

exports.createContacts = function (req, res) {

};

exports.updateContacts = function (req, res)
{
    var new_contact =  req.body;

    contacts.forEach
    (
        function( contact )
        {
            if( new_contact.id == contact.id )
            {
                var index = contacts.indexOf( contact );
                contacts.splice( index, 1, new_contact  );
            }
        }
    );
    console.dir( contacts );
};

exports.deleteContacts = function (req, res) {

};