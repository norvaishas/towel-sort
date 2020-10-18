
// You should implement your task here.

module.exports = function towelSort(matrix) {
    const sortMatrix = [];

    if (!matrix || matrix.length === 0) {
        return [];
    }

    matrix.forEach((elem, index) => {
        if (index % 2 !== 0) {
            sortMatrix.push(elem.reverse());
        } else {
            sortMatrix.push(elem);
        }
    });

    return sortMatrix.join().split(',');
}
