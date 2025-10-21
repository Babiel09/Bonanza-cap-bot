import { IsString } from 'class-validator';

export class ImovelDTO {
  @IsString()
  //({ description: 'Região do imóvel (ex.: mg, sp)', example: 'mg' })
  regiao: string;

  @IsString()
  //({ description: 'Categoria do imóvel (ex.: celulares, imoveis)', example: 'imoveis' })
  categoria: string;

  @IsString()
  //({ description: 'Nome ou título do imóvel', example: 'Casa 3 quartos' })
  nomeDoImovel: string;

  @IsString()
  //({ description: 'URL completa do anúncio', example: 'https://mg.olx.com.br/belo-horizonte-e-regiao/imoveis/casa-3-quartos-1446728594' })
  url: string;
}