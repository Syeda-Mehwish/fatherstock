import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CartItemInfo from './CartItemInfo';
import {Image} from 'react-native';

export const CartItem = ({
  item,
  selectedItems,
  setSelectedItems,
  customStyle,
  keyId,
  onPress,
}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const widthScaleFactor = windowWidth / 375;
  const heightScaleFactor = windowHeight / 812;
  const averageScaleFactor = (widthScaleFactor + heightScaleFactor) / 2;

  const toggleItemSelection = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems?.includes(itemId)) {
        return prevSelectedItems?.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };
  console.log({selectedItems});

  return (
    <>
      <Pressable
        key={item.id}
        style={[styles.container, customStyle]}
        onPress={onPress}>
        <View style={styles.listItemIconView}>
          {selectedItems?.includes(item?.id) ? (
            <Ionicons
              name="checkmark-circle"
              size={20 * averageScaleFactor}
              color="#FF612F"
            />
          ) : (
            <Feather
              name="circle"
              size={20 * averageScaleFactor}
              color="#8A8B9D"
            />
          )}
        </View>
        <Image style={styles.userImage} source={item?.pic} />
        <CartItemInfo title={item?.title} tag={item?.tag} price={item?.price} />
      </Pressable>
      {item?.id < 3 && <View style={styles.line} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    alignSelf: 'center',
  },
  listItemIconView: {
    marginRight: 15,
  },
  userImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#E9E9E9',
    alignSelf: 'center',
  },
});
