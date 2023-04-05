import { xml2json, json2xml } from 'xml-js';

export const xmlToJSON = (
  responseSoap: any[],
  format: 'default' | 'xml' = 'default',
) => {
  if (format === 'default') {
    return responseSoap[0];
  }

  return JSON.parse(xml2json(responseSoap[1]));
};

export const JSONToXml = (data: any) => {
  const options = { compact: true, ignoreComment: true, spaces: 4 };
  return json2xml(JSON.stringify(data), options);
};
