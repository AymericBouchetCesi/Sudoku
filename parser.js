
// let sudoku = {lines : [], cols : [], squares : []}

// let sudoku = new Sudoku([],[],[])

function parse(stringGrid) {
    let resultArray;
    while(stringGrid.length>0){
        resultArray += stringGrid.replace('^.{9}','')
    }
    console.log(resultArray)
    //TODO 
    return 'todo'
}

export {parse}