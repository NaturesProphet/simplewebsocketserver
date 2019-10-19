const WebSocket = require( 'ws' )

async function startServer () {
  // abre o servidor
  const wss = new WebSocket.Server( { port: 8080 } );
  console.log( 'Server iniciado.' )
  let sockets = new Array();

  // detecta novas conexões
  wss.on( 'connection', ws => {
    ws.on( 'open', function open () {
      //
    } );
    ws.on( 'message', function incoming ( data ) {
      //
    } );
    ws.on( 'close', function close () {
      //
    } );
    //adiciona a nova conexão na lista de sockets abertos
    sockets.push( ws );
  } );

  wss.on( 'close', ws => {
    console.log( 'Server closed.' )
  } );


  // atualiza a lista de sockets ativos removendo os terminados
  setInterval( () => {
    sockets.forEach( sock => {
      if ( sock.readyState == 3 ) {
        sockets.pop( sock );
      }
    } );
  }, 10000 );


  // simula o envio de uma mensagem a todos os sockets conectados
  setInterval( () => {
    if ( sockets.length > 0 ) {
      console.log( `sockets: ${sockets.length}\n------` )
      sockets.forEach( sock => {
        sock.send( 'teste' );
      } );
    } else {
      console.log( 'Nenhum socket conectado...' )
    }
  }, 1000 );

}


startServer();