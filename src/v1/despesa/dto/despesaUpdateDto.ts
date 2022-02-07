import { PartialType } from '@nestjs/mapped-types';
import { DespesaDto } from './despesaDto';

export class UpdateDespesaDto extends PartialType(DespesaDto) {}