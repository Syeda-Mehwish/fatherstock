import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import variables from '../../assets/styles/variables';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QuantityCounter = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const widthScaleFactor = windowWidth / 375;
  const heightScaleFactor = windowHeight / 812;
  const averageScaleFactor = (widthScaleFactor + heightScaleFactor) / 2;
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrementQuantity}>
        <Ionicons
          name="remove"
          size={16 * averageScaleFactor}
          color="#232323"
        />
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementQuantity}>
        <Ionicons name="add" size={16 * averageScaleFactor} color="#232323" />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityCounter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: variables.aeonik500,
    lineHeight: 18,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
    lineHeight: 18,
  },
});
