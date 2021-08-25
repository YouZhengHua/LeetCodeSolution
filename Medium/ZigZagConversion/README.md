# ZigZag Conversion
## Description
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```string convert(string s, int numRows);```

### Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

### Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

### Example 3:
    Input: s = "A", numRows = 1
    Output: "A"

### Constraints:
* `1 <= s.length <= 1000`
* `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
* `1 <= numRows <= 1000`

### 解題心得
將一字串改以之字型排列後重新輸出，主要難點在於如何找出之字排列的規律並將其轉換為迴圈輸出結果，以紙筆作圖輔助思考後會比較容易解題。

### 可改善空間
輔助得出答案的二維陣列可直接捨去，用數學的方式去計算出每一列字元，可大幅提升效率。

### Problems url: https://leetcode.com/problems/zigzag-conversion/