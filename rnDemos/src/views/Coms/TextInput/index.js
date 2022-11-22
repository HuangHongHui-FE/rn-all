import React, { Component } from "react";
import { TextInput, View } from "react-native";
import DescTextCom from '../../../components/DescText'


function UselessTextInput(props) {
    return (
        <TextInput
            {...props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
            editable
            maxLength={40}
        />
    );
}
const App = () => {

    const [value, onChangeText] = React.useState('Useless Placeholder');

    const [value2, onChangeText2] = React.useState('Useless Multiline Placeholder');

    // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上


    return (
        <View>
            <DescTextCom>TextInput 是一个允许用户在应用中通过键盘输入文本的基本组件。本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、占位文字，以及多种不同的键盘类型（如纯数字键盘）等等。</DescTextCom>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <View
                style={{
                    backgroundColor: value2,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                }}>
                <UselessTextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText2(text)}
                    value={value2}
                />
            </View>
        </View>
    );
}

export default App;