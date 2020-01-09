export { selectNextCellCode };

const selectNextCellCode = function () {
    let $code_cell = $('div.cell.code_cell.selected'); 
    $code_cell.removeClass('selected');

    let $next_code_cell = $code_cell.nextAll('div.cell.code_cell').first();
    $next_code_cell.addClass('selected');
};