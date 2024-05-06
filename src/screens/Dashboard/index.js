/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {CartItem} from '../../components/Cart/CartItem';
import {CustomHeader} from '../../components/headers/CustomHeader';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {ScrollView} from 'react-native';
import {Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [
  {
    id: '0',
    title: 'Tiara Muhallaba Dessert Mix 85...',
    tag: '15% Discount',
    price: 550.9,
    pic: require('../../assets/images/dummyPic1.png'),
  },
  {
    id: '1',
    title: 'Elysees Gelatin Treatment Shamp...',
    tag: 'Super Deal',
    price: 550.9,
    pic: require('../../assets/images/dummyPic2.png'),
  },
  {
    id: '2',
    title: 'Elysees Gelatin Treatment Shamp...',
    tag: 'Free shipping',
    price: 550.9,
    pic: require('../../assets/images/dummyPic2.png'),
  },
  {
    id: '3',
    title: 'Elysees Gelatin Treatment Shamp...',
    tag: '15% Discount',
    price: 550.9,
    pic: require('../../assets/images/dummyPic2.png'),
  },
];

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const behavior = Platform.select({
    ios: 'padding',
    android: 'padding',
  });

  const toggleItemSelection = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = prevSelectedItems?.includes(itemId)
        ? prevSelectedItems?.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId];

      const newTotalPrice = newSelectedItems.reduce((acc, id) => {
        const item = data.find((item) => item.id === id);
        return acc + (item?.price || 0);
      }, 0);

      setTotalPrice(newTotalPrice);
      return newSelectedItems;
    });
  };

  const colors = ['#FFD4C7', '#EFF3D3'];

  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{flex: 1}}>
      <SafeAreaView style={{flexGrow: 1}} edges={['top']}>
        <View style={{flex: 1}}>
          <CustomHeader
            title={`Shopping cart ${data?.length}`}
            headerLeft={<Feather name="arrow-left" size={24} color="#232323" />}
            headerRight={<EvilIcons name="trash" size={30} color="#232323" />}
          />
          <View style={{flexGrow: 1, flex: 1, backgroundColor: '#ffffff'}}>
            <ScrollView
              style={{flexGrow: 1}}
              contentContainerStyle={{flexGrow: 1}}
              nestedScrollEnabled
              keyboardShouldPersistTaps="always">
              <View style={{flex: 1}}>
                <FlatList
                  style={{}}
                  showsVerticalScrollIndicator={false}
                  data={data}
                  stickyHeaderHiddenOnScroll={true}
                  renderItem={({item}) => (
                    <CartItem
                      item={item}
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                      onPress={() => toggleItemSelection(item?.id)}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Checkout ({selectedItems.length})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 44,
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1,
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 24,
    marginLeft: 30,
  },
  button: {
    backgroundColor: '#FF612F',
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#ffffff',
  },
});
