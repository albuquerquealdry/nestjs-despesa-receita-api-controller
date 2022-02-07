import { Controller,Post, Body, Delete, Param, Get } from '@nestjs/common';
import { DespesaDto } from '../dto/despesaDto';
import { DespesaService } from '../service/despesa.service';

@Controller()
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post('despesa/create')
  public receitaSave(@Body() receitaDto : DespesaDto){
      return this.despesaService.create(receitaDto)
  }
  @Delete('despesa/:id')
  public remove(@Param('id') id: string) {
    return this.despesaService.remove(id);
  }
  @Get('despesa')
  findAll() {
    return this.despesaService.findAll();
  }
}
