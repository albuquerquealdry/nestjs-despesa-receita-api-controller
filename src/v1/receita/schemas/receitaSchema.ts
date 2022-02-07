import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReceitaDocument = Receita & Document;

@Schema()
export class Receita {
  @Prop()
  id: string;

  @Prop()
  descricao: string;

  @Prop()
  valor: number;

  @Prop()
  date: string;
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);