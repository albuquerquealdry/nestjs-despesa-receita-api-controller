import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceitaModule } from './v1/receita/receita.module';
import { DespesaModule } from './v1/despesa/despesa.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot("mongodb://user:user@cluster0-shard-00-00.gwusa.mongodb.net:27017,cluster0-shard-00-01.gwusa.mongodb.net:27017,cluster0-shard-00-02.gwusa.mongodb.net:27017/test?replicaSet=atlas-rzr18m-shard-0&ssl=true&authSource=admin"),
    ReceitaModule,
    DespesaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
