import { DespesaDto} from '../dto/despesaDto';
import { UpdateDespesaDto } from '../dto/despesaUpdateDto';
import { Model } from 'mongoose';
import { DespesaSchema, Despesa, DespesaDocument } from '../schemas/despesaSchema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DespesaService {
  constructor(@InjectModel(Despesa.name) private userModel: Model<DespesaDocument>){}
    create(despesaDto:DespesaDto) : Promise <any> {
      if(despesaDto.category=="1"){
        despesaDto.category = "Saúde"
      }
      if(despesaDto.category == "2"){
        despesaDto.category = "Alimentação"
      }
      if(despesaDto.category == "3"){
        despesaDto.category = "Transporte"
      }
      if(despesaDto.category == "4"){
        despesaDto.category = "Educação"
      }
      if(despesaDto.category == "5"){
        despesaDto.category = "Outros"
      }
      const user = new this.userModel(despesaDto)
      return user.save()
      .then((result) => {
        return({message : "Despesa inserida no banco de dados"})
      }).catch((err) => {
        throw new Error("Despesa não inserida no banco de dados")
      });
    }
    findAll() {
      return this.userModel.find()
      .then((result) => {
        return this.userModel.find()
      }).catch((err) => {
        throw new Error("Erro ao Listar as Despesas")
      });
    }
  
    findOne(id: string) {
      return this.userModel.findById(id)
      .then((result) => {
        return this.userModel.find()
      }).catch((err) => {
        throw new Error ("Erro ao listar usuario")
      });
    }
  
    update(id: string, updateDto: UpdateDespesaDto) {
      return this.userModel.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateDto,
        },
        {
          new: true,
        },
      );
    }
  
    remove(id: string) {
     this.userModel
        .deleteOne({
          _id: id,
        })
        .exec();
      
    }
    
}