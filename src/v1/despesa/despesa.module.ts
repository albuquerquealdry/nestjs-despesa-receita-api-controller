import { Module } from '@nestjs/common';
import { DespesaService } from './service/despesa.service';
import { DespesaController } from './controller/despesa.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Despesa, DespesaSchema } from './schemas/despesaSchema'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Despesa.name, schema: DespesaSchema }]),
  ],
  controllers: [DespesaController],
  providers: [DespesaService],
})
export class DespesaModule {}