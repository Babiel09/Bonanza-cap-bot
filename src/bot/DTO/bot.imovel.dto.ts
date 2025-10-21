import { Injectable } from "@nestjs/common";
import { IsString } from "class-validator";

@Injectable()

export class ImovelDTO{

    //Exemplo de URL:
//https://mg.olx.com.br/belo-horizonte-e-regiao/celulares/iphone-xr-1446728594?lis=listing_no_category

    @IsString()
    regiao:string;

    @IsString()
    categoria:string;

    @IsString()
    nomeDoImovel:string;
}