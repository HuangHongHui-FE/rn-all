const fs = require('fs');
const path = require('path');
const {newKnow} = require('./config/index')
console.log(newKnow);

let AppPath = path.resolve(__dirname, '..') + '/App.js'


const data = fs.readFileSync(AppPath, 'utf8').split('\n')
// 再用个res变量保证代码缩进正确
let res = data.map((item, index) => {
    return item.trim();
});

// console.log(data);
for(let i = 0; i < newKnow.length; i++){
    let item = newKnow[i];
    let dirIpt = `import ${item.dir}Screen from './src/views/${item.dir}'`;
    let dirStack = `<Stack.Screen name="${item.dir}" component={${item.dir}Screen} />`;
    let dirStackData = `        <Stack.Screen name="${item.dir}" component={${item.dir}Screen} />`;

    let StackIndex = res.indexOf('const Stack = createNativeStackNavigator();');
    console.log(StackIndex);

    // 主目录的写入
    if(res.indexOf(dirIpt) == -1){
        data.splice(StackIndex, 0, dirIpt);
        res.splice(StackIndex, 0, dirIpt);
    }

    if(res.indexOf(dirStack) == -1){
        // 这里才看下标，保证顺序
        let NavigatorIndex = res.indexOf('</Stack.Navigator>');
        res.splice(NavigatorIndex, 0, dirStack);
        data.splice(NavigatorIndex, 0, dirStackData);
    }
    // console.log(data);

    // 小目录的写入
    for(let k = 0; k < item.items.length; k++){
        let itemsIpt = `import ${item.items[k]} from './src/views/${item.dir}/${item.items[k]}/index'`
        let itemsStack = `<Stack.Screen name="${item.items[k]}" component={${item.items[k]}} />`;
        let itemsStackData = `        <Stack.Screen name="${item.items[k]}" component={${item.items[k]}} />`;

        // 根据主目录import的位置来进行
        let dirIptIndex = res.indexOf(dirIpt);
        if(res.indexOf(itemsIpt) == -1){
            data.splice(dirIptIndex + k + 1, 0, itemsIpt);
            res.splice(dirIptIndex + k + 1, 0, itemsIpt);
        }

        // 根据主目录stack的位置来进行
        let dirStackIndex = res.indexOf(dirStack);
        if(res.indexOf(itemsStack) == -1){
            data.splice(dirStackIndex + k + 1, 0, itemsStackData);
            res.splice(dirStackIndex + k + 1, 0, itemsStack);
        }
    }
}
console.log(data);
fs.writeFileSync(AppPath, data.join('\n'), 'utf8')