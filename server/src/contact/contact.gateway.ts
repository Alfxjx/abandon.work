import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Observable } from 'rxjs';

@WebSocketGateway(6000, { namespace: 'contact' })
export class ContactGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server;
    
    connectedUsers: string[] = [];
    
    async handleConnection(){}
    async handleDisconnect(){}
}
