//打印九九乘法表的结果
function multiTable() {
    var m, res, n = 9;
    for (var i = 1; i <= n; i++){
        for(m = i; m <= n; m++){
            res = m * i;
            console.log(i + '*' + m + '=' + res);
        }
    }
}

// multiTable();

// 创建九九乘法表的table
function createmultiTable() {
    var tb = document.createElement('table');
    tb.setAttribute('border','1');
    var multiNum = 9, trObj, tdObj, res; // 九九乘法表的最大数
    for (var m = 1; m <= multiNum; m++) {  // m， 行
        trObj = document.createElement('tr');
        for (var n = 1; n <= multiNum; n++) {  // n, 列
            tdObj =  document.createElement('td');
            if(n <= m) {
                res = n * m;
                tdObj.innerHTML = n + '*' + m + '=' + res;
            }
            trObj.appendChild(tdObj);
        }
        tb.appendChild(trObj);
    }
    return tb;
}

var tableObj = createmultiTable();
document.body.appendChild(tableObj);