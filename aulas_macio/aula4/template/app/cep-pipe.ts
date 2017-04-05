import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'cpf'
})

export class ValidaCPF implements PipeTransform {
    transform(value: string): string {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (value.length < 11)
            return "CPF Inválido";
        for (i = 0; i < value.length - 1; i++)
            if (value.charAt(i) !== value.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = value.substring(0, 9);
            digitos = value.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== digitos.charAt(0))
                return "CPF Inválido";
            numeros = value.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado !== digitos.charAt(1))
                return "CPF Inválido";
            return "CPF Válido!!  " + value.substring(0, 3) + "." + value.substring(3, 6) + "." + value.substring(6, 9) + "-" + value.substring(9, 11);
        }
        else
            return "CPF Inválido";

    }
}