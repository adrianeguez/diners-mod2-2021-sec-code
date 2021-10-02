import {
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

// Data Transfer Object
export class UsuarioDto {
  @IsOptional() // Decoradores
  @IsString()
  @IsAlphanumeric()
  @MinLength(3)
  @MaxLength(10)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @MinLength(3)
  @MaxLength(10)
  apellido: string;
}
