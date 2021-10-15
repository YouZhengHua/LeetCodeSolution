/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let water = 0;
    let level = 1;
    let haveBorder;
    do{
        haveBorder = false;
        let d = 0;
        for(let h of height){
            if(!haveBorder && h >= level){
                haveBorder = true;
            } else if(haveBorder && h < level){
                d++;
            } else if(haveBorder && h >= level){
                water += d;
                d = 0;
            }
        }
        level++;
    }while(haveBorder);
    return water;
};