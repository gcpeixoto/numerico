var exports = module.exports = {};

stringToMatrix = function stringToMatrix(stringMatrix) {
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

    console.log(matrix);
    return matrix
};

exports.createIdentity = function (size) {
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


exports.eliminacaolu = function (stringMatrix) {
    let matrix = stringToMatrix(stringMatrix);

    let coefK = [];

    for (let line = 1; line < matrix.length; line++) {
        coefK.push(matrix[line][line-1]/matrix[line-1][line]);
    }


    return matrix;
};