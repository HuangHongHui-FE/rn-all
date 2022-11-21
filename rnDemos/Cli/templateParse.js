const fs = require('fs')
function views_index_parse(data) {  // data = {title: 'nnn', name: 'hhh'}
    let temPath = __dirname + '/template/views_index.js';
    let template = fs.readFileSync(temPath, 'utf8');
    for (let key in data) {
        let repStr = `H$${key}$H`
        template = template.replaceAll(repStr, data[key])
    };
    return template
}



function item_index_parse(DescText) {  // 字符串
    let temPath = __dirname + '/template/item_index.js';
    let template = fs.readFileSync(temPath, 'utf8');
    let repStr = 'H$DescText$H'
    template = template.replaceAll(repStr, DescText)
    return template
}


function views_data_parse(data){  // Arr数组
    let temPath = __dirname + '/template/views_data.js';
    let template = fs.readFileSync(temPath, 'utf8');
    let repStr = 'H$Arr$H';
    let str = ''
    data.forEach((item, index) => {
        if(index!=0){
            str = str + "," +  "'" + item + "'";
        }else{
            str = str + "'" + item + "'";
        }
        
    })
    template = template.replaceAll(repStr, str)
    return template
}


module.exports = {
    views_index_parse,
    item_index_parse,
    views_data_parse
}