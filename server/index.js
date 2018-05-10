const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const messages = require( './controllers/messages_controller.js');

const app = express();
const apiPath = '/api/messages';

app.use( bodyParser.json() );
app.use( express.static( '/../public/build' ) );

app.get( apiPath, messages.getMessages );
app.post( apiPath, messages.createMessage );
app.put( apiPath + '/:id', messages.updateMessage );
app.delete( apiPath + '/:id', messages.deleteMessage );

app.listen( 3000, () => console.log('Listening on port 3000') );
