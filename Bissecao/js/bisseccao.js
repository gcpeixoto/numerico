const exprVal = require('expr-eval/index');

/**
 * Calcula uma interação da bissecao, OBS: método recurssivo
 * @param stringExpression Expressão em formato string, aceita valores como 2 ^ x, ou sin(x^3)....
 * @param limInf valor de limite inferior da expressão, por exemplo, um valor negativo -999
 * @param limSup valor de limite superior da expressão, por exemplo, um valor positivo 999
 * @param maxInterations Limite máximo de interações para que não entre em loop infinito. Quanto maior, mais precisa a raiz
 * @param tolerancia Valor mínimo aceitável como raiz
 */
function bissecao(stringExpression, limInf, limSup, maxInterations, tolerancia) {

    //Converte a expressão para um valor calculável (mesmo que tenha variáveis)
    const parsedExpression = exprVal.Parser.parse(stringExpression);

    // Calcule o ponto médio
    const pontoMedio = (limSup + limInf) / 2;

    //Substitui X pelo pontoMedio na expressão
    const fMedia = parsedExpression.evaluate({x: pontoMedio});

    console.log("------------------------");
    console.log("Limite Inferior: "+limInf);
    console.log("Ponto Medio: "+ pontoMedio);
    console.log("Limite Superior: "+limSup);
    console.log("F(PontoMedio): "+fMedia);
    console.log("------------------------");
    //Plota a expressão aqui (ou não)

    //

    //Verifica se encontrou a raiz no ponto médio ou se valores estão na tolerancia aceitável
    if (fMedia === 0 || ((limSup - limInf) / 2) <= tolerancia) {
        return fMedia;
    }

    //Verifica se ainda dá pra fazer mais recursões
    if (--maxInterations > 0) {

        //Substitui X pelo limite Inferior
        const fInferior = parsedExpression.evaluate({x: limInf});

        //Se sinal da funcao aplicada no ponto medio for igual a sinal da funcao aplicada no limite Inferior
        //então, o ponto medio sera o novo limite inferior, (pois a raiz estara no lado esquerdo)
        //caso contrário, o ponto medio sera o novo limite superior (pois a raiz estara no lado direito)
        Math.sign(fMedia) === Math.sign(fInferior) ? limInf = pontoMedio : limSup = pontoMedio;

        //Chama recursividade com os novos limites inferiores e superiores
        return bissecao(stringExpression, limInf, limSup, maxInterations, tolerancia);
    }

    //Chegou ao fim das interaçoes sem encontrar a raiz
    console.log("Não foram encontradas as raizes para a quantidade de interações feitas, aumente as interações ou a tolerancia")
}