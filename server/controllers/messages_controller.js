/**
{
    id: 1,
    text: "This is the content of the message",
    time: "May 9 2018"
}
*/

let messages = [];
let id = 0;

module.exports = {
    getMessages: (req, res) => {
        return res.status(200).json(messages);
    },

    createMessage: (req, res) => {
        req.body.id = id;
        messages.push( req.body );
        id++;

        return res.status(200).json(messages);
    },

    updateMessage: (req, res) => {
        let targetId = Number(req.params.id); 
        messages[ targetId ] = {
            id: targetId,
            text: req.body.text || messages[ targetId ].text,
            time: req.body.time || messages[ targetId ].time
        };
        
        return res.status(200).json(messages);
    },

    deleteMessage: (req, res) => {
        let targetId = Number(req.params.id);

        for ( let i = 0; i < messages.length; i++ ) {
            if ( messages[i].id === targetId ) {
                messages.splice(i, 1);
            } 
        } 

        // const deleteID = req.params.id;    
        // messageIndex = messages.findIndex( message => message.id == deleteID );
        // messages.splice(messageIndex, 1);

        return res.status(200).json(messages);
    }
}