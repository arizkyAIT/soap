import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';
import { CalculatorDTO } from './dto/calculator.dto';
import { xmlToJSON } from 'src/helpers/xml.helper';

@Injectable()
export class CalculatorService {
  constructor(@Inject('SOAP_CLIENT') private readonly soapClient: Client) {}

  getDescribe() {
    return this.soapClient.describe();
  }

  async add(dto: CalculatorDTO) {
    try {
      const responseSoap = await this.soapClient.AddAsync({
        intA: dto.int_a,
        intB: dto.int_b,
      });

      return xmlToJSON(responseSoap);
    } catch (error) {
      throw new Error(error);
    }
  }

  async subtract(dto: CalculatorDTO) {
    try {
      const responseSoap = await this.soapClient.SubtractAsync({
        intA: dto.int_a,
        intB: dto.int_b,
      });

      return xmlToJSON(responseSoap);
    } catch (error) {
      throw new Error(error);
    }
  }

  async multiply(dto: CalculatorDTO) {
    try {
      const responseSoap = await this.soapClient.MultiplyAsync({
        intA: dto.int_a,
        intB: dto.int_b,
      });

      return xmlToJSON(responseSoap);
    } catch (error) {
      throw new Error(error);
    }
  }

  async divide(dto: CalculatorDTO) {
    try {
      const responseSoap = await this.soapClient.DivideAsync({
        intA: dto.int_a,
        intB: dto.int_b,
      });

      return xmlToJSON(responseSoap);
    } catch (error) {
      throw new Error(error);
    }
  }
}
