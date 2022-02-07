import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DespesaDocument = Despesa & Document;

@Schema()
export class Despesa {
  @Prop()
  id: string;

  @Prop()
  descricao: string;

  @Prop()
  valor: number;

  @Prop()
  date: string;

  @Prop()
  category: string;
}

export const DespesaSchema = SchemaFactory.createForClass(Despesa);