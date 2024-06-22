import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  let isDark = useColorScheme() === 'dark';

  return (
    <View style = {[isDark? styles.darkBackGround: styles.lightBackGround, styles.container]}>
      <Text style = {isDark? styles.lightText: styles.darkText}>
        App Pro Loaded
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  lightText: {
    color: '#FFFFFF'
  },

  darkText: {
    color: '#000000'
  },

  lightBackGround: {
    backgroundColor: '#FFFFFF'
  },

  darkBackGround: {
    backgroundColor: '#000000'
  },

})

export default AppPro;
