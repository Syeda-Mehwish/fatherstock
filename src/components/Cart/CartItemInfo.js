import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import QuantityCounter from './QuanityCounter';
import variables from '../../assets/styles/variables';

const CartItemInfo = ({title, price, tag}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.detailsView}>
        <View>
          <Text style={styles.priceText}>${price}</Text>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
        <QuantityCounter />
      </View>
    </View>
  );
};

export default CartItemInfo;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',

    flex: 1,
  },
  priceText: {
    fontSize: 18,
    fontFamily: variables.aeonik500,
    lineHeight: 18,
    fontWeight: '500',
    color: '#0E1722',
    marginBottom: 8,
  },
  titleText: {
    fontSize: 14,
    fontFamily: variables.aeonik500,
    lineHeight: 19,
    fontWeight: '400',
    color: '#0E1722',
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    fontFamily: variables.aeonik500,
    lineHeight: 15,
    fontWeight: '400',
    color: '#FF612F',
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
