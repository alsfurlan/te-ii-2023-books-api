import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { GeneroEnum } from './genero.enum';
import { Type } from 'class-transformer';
import { NacionalidadeDto } from 'src/nacionalidade/nacionalidade.dto';

export class AutorDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  @IsOptional()
  dataNascimento?: Date | string; 

  @IsEnum(GeneroEnum)
  @IsOptional()
  genero?: GeneroEnum;
  
  @IsOptional()
  @Type(() => NacionalidadeDto)
  @ValidateNested()
  nacionalidade?: NacionalidadeDto;
}
