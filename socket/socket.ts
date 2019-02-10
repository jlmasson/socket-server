import {Server, Socket} from 'socket.io';

export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    })
};

export const mensaje = (cliente: Socket, io: Server) => {
  cliente.on('mensaje', ( payload: any ) => {
    console.log(payload);
    io.emit('mensaje-nuevo', payload);
  })
};
