
// diferencia de Implements e extends 

// Implements somente para usar na interface
// Extends , uma class Herda a Outra classe


export interface Pai {
  nome: string;
  idade: number;
  aniversarioPai(): number;
}

export class Filho implements Pai {
  nome: string;
  idade: number;
  aniversarioPai(): number {
    throw new Error("Method not implemented.");
  }
}


// classe e metodos
export class Calculadora {


  soma(a: number, b: number) {
    return a + b;
  }

  subtrair(a: number, b: number) {
    return a - b;
  }

  dividir(a: number, b: number) {
    if (b !== 0) {
      return a / b;
    }

    throw new Error('Nao possivel dividir com Zero');
  }
}


// methodos 
export function Soma(a: number, b: number) {
  return a + b;
}