/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        if(haveRepeat(board[i])){
            return false;
        }
        const colums = [];
        for(let j = 0; j<9; j++){
            colums.push(board[j][i]);
        }
        if(haveRepeat(colums)){
            return false;
        }
    }
    for(let x = 0; x < 9; x += 3){
        for(let y = 0; y < 9; y +=3){
            const nums = [];
            for(let i = x; i < x + 3; i++){
                for(let j = y; j < y + 3; j++){
                    nums.push(board[i][j]);
                }
            }
            if(haveRepeat(nums)){
                return false;
            }
        }
    }
    return true;
};

const haveRepeat = (...[nums]) => {
    const array = [];
    for(const num of nums){
        if(num === "."){
            continue;
        }
        if(array.indexOf(num) === -1){
            array.push(num);
        }else{
            return true;
        }
    }
    return false;
}