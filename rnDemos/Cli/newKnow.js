const fs = require('fs');
const path = require('path');
const { newKnow } = require('./config/index')
console.log(newKnow);
// 模板解析
const { views_index_parse, item_index_parse, views_data_parse } = require('./templateParse')


// App文件里写入
let AppPath = path.resolve(__dirname, '..') + '/App.js'
const data = fs.readFileSync(AppPath, 'utf8').split('\n')
// 再用个res变量保证代码缩进正确
let res = data.map((item, index) => {
    return item.trim();
});

// console.log(data);
for (let i = 0; i < newKnow.length; i++) {
    let item = newKnow[i];
    let dirIpt = `import ${item.dir}Screen from './src/views/${item.dir}'`;
    let dirStack = `<Stack.Screen name="${item.dir}" component={${item.dir}Screen} />`;
    let dirStackData = `        <Stack.Screen name="${item.dir}" component={${item.dir}Screen} />`;

    let StackIndex = res.indexOf('const Stack = createNativeStackNavigator();');
    // console.log(StackIndex);

    // 主目录的写入
    if (res.indexOf(dirIpt) == -1) {
        data.splice(StackIndex, 0, dirIpt);
        res.splice(StackIndex, 0, dirIpt);
    }

    if (res.indexOf(dirStack) == -1) {
        // 这里才看下标，保证顺序
        let NavigatorIndex = res.indexOf('</Stack.Navigator>');
        res.splice(NavigatorIndex, 0, dirStack);
        data.splice(NavigatorIndex, 0, dirStackData);
    }
    // console.log(data);

    // 小目录的写入
    for (let k = 0; k < item.items.length; k++) {
        let itemsIpt = `import ${item.items[k]} from './src/views/${item.dir}/${item.items[k]}/index'`
        let itemsStack = `<Stack.Screen name="${item.items[k]}" component={${item.items[k]}} />`;
        let itemsStackData = `        <Stack.Screen name="${item.items[k]}" component={${item.items[k]}} />`;

        // 根据主目录import的位置来进行
        let dirIptIndex = res.indexOf(dirIpt);
        if (res.indexOf(itemsIpt) == -1) {
            data.splice(dirIptIndex + k + 1, 0, itemsIpt);
            res.splice(dirIptIndex + k + 1, 0, itemsIpt);
        }

        // 根据主目录stack的位置来进行
        let dirStackIndex = res.indexOf(dirStack);
        if (res.indexOf(itemsStack) == -1) {
            data.splice(dirStackIndex + k + 1, 0, itemsStackData);
            res.splice(dirStackIndex + k + 1, 0, itemsStack);
        }
    }
}
// console.log(data);
fs.writeFileSync(AppPath, data.join('\n'), 'utf8')




// homeData写入
let homeDataPath = path.resolve(__dirname, '..') + '/src/homeData.js';
let homeData = fs.readFileSync(homeDataPath, 'utf8').split('\n');
let homeDataRes = homeData.map((item, index) => {
    return item.trim();
})
// console.log(homeDataRes);

for (let i = 0; i < newKnow.length; i++) {
    let item = newKnow[i];

    let dirStr = `{ key: '${item.dir}', path: '${item.dir}' },`
    let endMask = ']';

    let endMaskIndex = homeDataRes.indexOf(endMask);
    if (homeDataRes.indexOf(dirStr) == '-1') {
        homeData.splice(endMaskIndex, 0, `    ${dirStr}`);
        homeDataRes.splice(endMaskIndex, 0, dirStr)
    }
}
// console.log(homeData);
fs.writeFileSync(homeDataPath, homeData.join('\n'), 'utf8')



// 各个主目录下的文件夹
for (let i = 0; i < newKnow.length; i++) {
    let item = newKnow[i];

    let itemPath = path.resolve(__dirname, '..') + `/src/views/${item.dir}`;
    fs.existsSync(itemPath) || fs.mkdirSync(itemPath);


    // 模板解析
    let itemIndexPath = itemPath + '/index.js';
    let views_index_res = views_index_parse({ Screen: item.dir + 'Screen', title: item.dir });
    fs.existsSync(itemIndexPath) || fs.writeFileSync(itemIndexPath, views_index_res, 'utf8');

    let itemDataPath = itemPath + '/data.js';

    // 如果已经存在的data.js
    if (fs.existsSync(itemDataPath)) {
        let itemData = fs.readFileSync(itemDataPath, 'utf8');
        // console.log(itemData);
        let addStr = ''
        for (let k = 0; k < item.items.length; k++) {
            if (itemData.indexOf(item.items[k]) == -1) {
                addStr = addStr + ", '" + item.items[k] + "'"
            }
        }
        // 有新增的
        if (addStr) {
            let indexRight = itemData.indexOf("]");
            itemData = itemData.substring(0, indexRight) + addStr + itemData.substring(indexRight);
            // console.log(itemData);
            fs.writeFileSync(itemDataPath, itemData, 'utf8');
        }

    } else {
        let views_data_res = views_data_parse(item.items)
        fs.writeFileSync(itemDataPath, views_data_res, 'utf8');
    }


    // 每个小item的文件夹创建以及index.js文件写入
    for(let p = 0; p < item.items.length; p++){
        let item_itemDirPath = path.resolve(__dirname, '..') + `/src/views/${item.dir}/${item.items[p]}`;
        let item_itemIndexPath = item_itemDirPath + '/index.js';
        fs.existsSync(item_itemDirPath) || fs.mkdirSync(item_itemDirPath);
        let item_index_res = item_index_parse('添加描述');
        // console.log(item_index_res);
        console.log(item_itemIndexPath);
        fs.existsSync(item_itemIndexPath) || fs.writeFileSync(item_itemIndexPath, item_index_res, 'utf8')
    }
}
