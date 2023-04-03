import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorService],
  imports: [
    SoapModule.forRootAsync({
      clientName: 'SOAP_CLIENT',
      useFactory: async (): Promise<SoapModuleOptions> => ({
        clientName: 'SOAP_CLIENT',
        uri: 'http://www.dneonline.com/calculator.asmx?wsdl',
      }),
    }),
  ],
})
export class CalculatorModule {}
