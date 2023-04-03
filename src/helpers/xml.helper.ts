import { xml2json } from 'xml-js';

export const xmlToJSON = (
  responseSoap: any[],
  format: 'default' | 'xml' = 'default',
) => {
  if (format === 'default') {
    return responseSoap[0];
  }

  return JSON.parse(xml2json(responseSoap[1]));
};
