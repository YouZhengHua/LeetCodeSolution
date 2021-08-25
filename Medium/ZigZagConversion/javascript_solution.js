/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }
    const rowArray = [];
    let rows = 0;
    let column = 0;
    for(let i = 0; i < s.length; i++){
        if(rowArray[rows] === undefined){
            let tempArray = [];
            for(let spaceNum = 0; spaceNum < column; spaceNum++){
                tempArray.push("");
            }
            tempArray.push(s.substring(i, i+1));
            rowArray.push(tempArray);
        }else{
            rowArray[rows][column] = (s.substring(i, i+1));
        }
        if(rows % (numRows - 1) === 0){
            column += 1;
        }
        if(rows % (numRows - 1) !== 0 || column % numRows === 0){
            rows += 1;
            column = column % numRows === 0 ? numRows - 2 : column - 1;
        }
    }
    let ans = "";
    for(let col = 0; col < numRows; col++){
        for(let row of rowArray){
            ans = row[col] !== undefined ? ans + row[col] : ans;
        }
    }
    return ans;
};