import { ReceitaDto} from '../dto/receitaDto';
import { UpdateReceitaDto } from '../dto/receitaUpdateDto';
import { Model } from 'mongoose';
import { ReceitaSchema, Receita, ReceitaDocument } from '../schemas/receitaSchema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';


@Injectable()
export class ReceitaService {
  constructor(@InjectModel(Receita.name) private userModel: Model<ReceitaDocument>) {}
    create(receitaDto:ReceitaDto) {
      const user = new this.userModel(receitaDto)
      return user.save()
      .then((result) =>{
        return ({status : 201,  message : "Receita adcionada "})
      }).catch((err) => {
        throw new error('INTERNAL EXCEPTION', 500)
      });
    }
    findAll() {
      return this.userModel.find()
      .then((result) => {
        return this.userModel.find()
      }).catch((err) => {
        throw new error("NOT FOUND", 404)
      });
    }
  
    findOne(id: string) {
      return this.userModel.findById(id)
      .then((result) => {
        return this.userModel.findById(id)
      }).catch((err) => {
        throw new error("NOT FOUND", 404)
      });
    }
  
    update(id: string, updateDto: UpdateReceitaDto) {
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
      return this.userModel
        .deleteOne({
          _id: id,
        })
        .exec();
    }
}
