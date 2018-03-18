const express = require( "express" );
const app = express();






app.get( "/", (req, res)=>{ 
	res.send( "hello world! 😍" );
 } );



var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen( server_port, server_ip_address, _=>{ console.log( "server is running!" ) } );
