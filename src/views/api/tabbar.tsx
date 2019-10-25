// 移除

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TabBarIOS
} from 'react-native';

const Tabbar: React.SFC = () => {
  return (
    <View style={styles.container}>
        <TabBarIOS
             style={{height:49, width: '100%'}}
             tintColor="green"
             barTintColor="black"    // TabBarIOS背景色}
             translucent={false}     // TabBarIOS不需要半透明效果
        >

            <TabBarIOS.Item
                systemIcon="bookmarks"  // 系统图标(bookmarks)
            >
              <Text>1</Text>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="contacts"  // 系统图标(contacts)
            >
               <Text>1</Text>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="downloads"  // 系统图标(downloads)
            >
               <Text>1</Text>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="favorites"  // 系统图标(favorites)
            >
               <Text>1</Text>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="history"  // 系统图标(history)
                badge="99+"
            >
               <Text>1</Text>
            </TabBarIOS.Item>
        </TabBarIOS>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Tabbar