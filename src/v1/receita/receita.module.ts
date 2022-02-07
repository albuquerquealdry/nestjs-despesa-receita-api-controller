import { Module } from '@nestjs/common';
import { ReceitaService } from './service/receita.service';
import { ReceitaController } from './controller/receita.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Receita, ReceitaSchema } from './schemas/receitaSchema'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Receita.name, schema: ReceitaSchema }]),
  ],
  controllers: [ReceitaController],
  providers: [ReceitaService],
})
export class ReceitaModule {}