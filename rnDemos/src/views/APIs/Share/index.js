import React from "react";
import { View, Button, Share } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
                // url: 'https://gitee.com/hhh3167253066/',  // ios有效
                // title: 'HHH是爸爸'
            });
            if (result.action === Share.sharedAction) {  // android中始终为Share.sharedAction
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared   分享成功
                }
            } else if (result.action === Share.dismissedAction) {
                // 表示对话框被取消。
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={{ marginTop: 50 }}>
            <DescTextCom>打开一个对话框来分享文本内容。</DescTextCom>
            <Button onPress={onShare} title="Share" />
        </View>
    );
}

export default App;