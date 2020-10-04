import { Module } from '@nestjs/common';
import { ContactGateway } from './contact.gateway';
@Module({
    providers:[ContactGateway]
})
export class ContactModule{}