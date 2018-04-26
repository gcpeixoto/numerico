var exports = module.exports = {};

stringToMatrix = function (stringMatrix) {

    let lines = stringMatrix.split("\n");
    let matrix = [];

    lines.forEach(function (line) {

        let lineNumbs = line.split(" ");
        let arrayLine = [];

        lineNumbs.forEach(function (number) {
            arrayLine.push(parseFloat(number));
        });
        matrix.push(arrayLine);
    });

    // console.log(matrix);
    return matrix
};


createIdentity = function (size) {

    let matrix = [];

    for (let line = 0; line < size; line++) {
        let matrixLine = [];

        for (let column = 0; column < size; column++) {
            if (line == column)
                matrixLine.push(1);
            else
                matrixLine.push(0);
        }
        matrix.push(matrixLine);
    }
    return matrix;

};

reductedmatrix = function (augmentedMatrix) {

    let matrix = cloneMatrix(augmentedMatrix);

    matrix.forEach(function (line) {
        line.pop();
    });

    return matrix;

};

resultmatrix = function (augmentedMatrix) {

    let resultMatrix = [];
    let matrix = cloneMatrix(augmentedMatrix);

    matrix.forEach(function (line) {
        resultMatrix.push([line.pop()]);
    });

    return resultMatrix;

};

cloneMatrix = function (originalMatrix) {

    let matrix = [];
    for (let i = 0; i < originalMatrix.length; i++)
        matrix[i] = originalMatrix[i].slice(0);
    return matrix;

};

zeroMatrix = function (size) {
    let matrix = [];

    for (let line = 0; line < size; line++) {
        let matrixLine = [];

        for (let column = 0; column < size; column++) {
            matrixLine.push(0);
        }
        matrix.push(matrixLine);
    }
    return matrix;
};

createLMatrix = function (size, multipliers) {

    let matrix = createIdentity(size);
    let multipliersClone = multipliers.slice(0);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] == 1)
                break;
            matrix[i][j] = multipliersClone.shift();
        }
    }

    return matrix;
};

exports.eliminacaolu2 = function (stringAugmentedMatrix) {

    let matrizAumentada = stringToMatrix(stringAugmentedMatrix);
    let matrizOriginal = stringToMatrix(stringAugmentedMatrix);
    let coeficienteK = [];
    let steps = [];

    console.log("Matriz Aumentada: ");
    console.log(matrizAumentada);

    for (let linha = 1; linha < matrizAumentada.length; linha++) {
        steps.push("Iteração " + linha);
        console.log("\nIteração " + linha + ":\n");
        try {
            for (let linhaASomar = 0; ; linhaASomar++) {
                coeficienteK.push(matrizAumentada[linha + linhaASomar][linha - 1] / matrizAumentada[linha - 1][linha - 1]);
                console.log("Coeficiente K = " + coeficienteK[coeficienteK.length - 1]);
                steps.push("Na Linha " + (linha + linhaASomar) + ":  L" + (linha + linhaASomar) + " = L" + (linha + linhaASomar + 1) + " - L" + (linha) + " * K");
                console.log("Na Linha " + (linha + linhaASomar) + ":  L" + (linha + linhaASomar) + " = L" + (linha + linhaASomar + 1) + " - L" + (linha) + " * K");
                for (let column = 0; column < matrizAumentada[0].length; column++) {
                    matrizAumentada[linha + linhaASomar][column] = matrizAumentada[linha + linhaASomar][column] - matrizAumentada[linha - 1][column] * coeficienteK[coeficienteK.length - 1];
                    console.log("Coluna " + column + " = (" + matrizAumentada[linha + linhaASomar][column] + ")-(" + matrizAumentada[linha - 1][column] + "*" + coeficienteK[coeficienteK.length - 1] + ")");
                    steps.push("Coluna " + column + " = (" + matrizAumentada[linha + linhaASomar][column] + ")-(" + matrizAumentada[linha - 1][column] + "*" + coeficienteK[coeficienteK.length - 1] + ")");
                }
            }
        } catch (e) {
        }
    }

    let matrizU = reductedmatrix(matrizAumentada);
    let matrizL = createLMatrix(matrizAumentada.length, coeficienteK);
    console.log("\nMatriz L:");
    console.log(matrizL);
    console.log("Matriz U:");
    console.log(matrizU);


    let response = {
        "matrizAumentada": matrizOriginal,
        "matrizL": matrizL,
        "matrizU": matrizU,
        "passos":steps
    };

    return response;

};