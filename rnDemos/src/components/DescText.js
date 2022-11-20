import React from "react";
import {Text, View} from 'react-native';

function DescTextCom({children= '没设置描述！'}){
    return (
        <View>
            <Text style={{color: '#9400d3'}}>{children}</Text>
        </View>
    )
}

export default DescTextCom;