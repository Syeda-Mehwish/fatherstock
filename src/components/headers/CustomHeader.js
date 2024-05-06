import React from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomHeader = ({
  title,
  customStyle,
  headerLeft,
  headerRight,
  desc,
  topSpacing,
}) => {
  const insets = useSafeAreaInsets();
  const colors = ['#FFD4C7', '#EFF3D3'];

  return (
    <View
      style={[
        styles.headerContainer,
        customStyle,
        (title === undefined || title === '' || topSpacing) && {
          marginTop: Platform.OS === 'android' ? insets?.top : 0,
        },
      ]}>
      <View style={[styles.backButton]}>{headerLeft}</View>
      <View style={styles.centerContainer}>
        <Text style={[styles.headerTitle]}>{title}</Text>
        {desc}
      </View>
      <View style={[styles.backButton, {alignItems: 'flex-start'}]}>
        {headerRight}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerTitle: {
    color: '#0E1722',
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
