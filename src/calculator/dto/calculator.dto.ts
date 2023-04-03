import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CalculatorDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  int_a: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  int_b: number;
}
