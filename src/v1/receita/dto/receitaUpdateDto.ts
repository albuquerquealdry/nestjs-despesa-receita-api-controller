import { PartialType } from '@nestjs/mapped-types';
import { ReceitaDto } from './receitaDto';

export class UpdateReceitaDto extends PartialType(ReceitaDto) {}