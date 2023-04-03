import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { responseError, responseSuccess } from 'src/helpers/response.helper';
import { CalculatorDTO } from './dto/calculator.dto';

@Controller('calculator')
@ApiTags('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('describe')
  async getDescribe(@Res() res: Response) {
    try {
      return responseSuccess(res, {
        data: this.calculatorService.getDescribe(),
      });
    } catch (error) {
      return responseError(res, {
        message: error.message,
      });
    }
  }

  @Post('add')
  @HttpCode(200)
  async add(@Res() res: Response, @Body() dto: CalculatorDTO) {
    try {
      const data = await this.calculatorService.add(dto);
      return responseSuccess(res, {
        data,
      });
    } catch (error) {
      return responseError(res, {
        message: error.message,
      });
    }
  }

  @Post('subtract')
  @HttpCode(200)
  async subtract(@Res() res: Response, @Body() dto: CalculatorDTO) {
    try {
      const data = await this.calculatorService.subtract(dto);
      return responseSuccess(res, {
        data,
      });
    } catch (error) {
      return responseError(res, {
        message: error.message,
      });
    }
  }

  @Post('multiply')
  @HttpCode(200)
  async multiply(@Res() res: Response, @Body() dto: CalculatorDTO) {
    try {
      const data = await this.calculatorService.multiply(dto);
      return responseSuccess(res, {
        data,
      });
    } catch (error) {
      return responseError(res, {
        message: error.message,
      });
    }
  }

  @Post('divide')
  @HttpCode(200)
  async divide(@Res() res: Response, @Body() dto: CalculatorDTO) {
    try {
      const data = await this.calculatorService.divide(dto);
      return responseSuccess(res, {
        data,
      });
    } catch (error) {
      return responseError(res, {
        message: error.message,
      });
    }
  }
}
