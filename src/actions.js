export { selectNextCellCode };

const selectNextCellCode = function () {
    $('div.cell.code_cell.selected')
        .removeClass('selected')
        .nextAll('div.cell.code_cell').first()
        .addClass('selected');
};