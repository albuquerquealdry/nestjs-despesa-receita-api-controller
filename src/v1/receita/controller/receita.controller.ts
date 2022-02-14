import { Controller,Post, Body, Delete, Param, Get } from '@nestjs/common';
import { ReceitaDto } from '../dto/receitaDto';
import { ReceitaService } from '../service/receita.service';
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
@Controller()
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @Post('receita/create')
  public receitaSave(@Body() receitaDto : ReceitaDto){
      return this.receitaService.create(receitaDto)
  }
  @Delete('receita/:id')
  public remove(@Param('id') id: string) {
    return this.receitaService.remove(id);
  }
  @Get('receita')
  findAll() {
    return this.receitaService.findAll();
  }
}
