import {
  Headers,
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  InternalServerErrorException,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioDto } from './dto/usuario.dto';
import { validate } from 'class-validator';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  holaGet(): string {
    return 'HOLA GET';
  }

  @Post('')
  @HttpCode(200)
  async holaPost(
    @Query() parametrosConsulta,
    @Body() parametrosCuerpo,
    @Headers() cabeceras,
  ) {
    try {
      // import { UsuarioDto } from './dto/usuario.dto';
      const usuarioDto = new UsuarioDto();
      usuarioDto.nombre = parametrosConsulta.nombre;
      usuarioDto.apellido = parametrosConsulta.apellido;
      // import { validate } from 'class-validator';
      const arregloErrores = await validate(usuarioDto);
      if (arregloErrores.length > 0) {
        console.log(JSON.stringify(arregloErrores));
        throw new BadRequestException('Error validacion'); // 400
      } else {
        return 'HOLA POST VALIDADO';
      }
    } catch (error) {
      console.log(error);
      if (error.status) {
        if (error.status === 400) {
          throw new BadRequestException('Error validando'); // 400
        } else {
          throw new InternalServerErrorException(); // 500
        }
      } else {
        throw new InternalServerErrorException(); // 500
      }
    }
  }
}
