import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const CartButton = (props) => {
  return (
    <TouchableOpacity
        onPress={props.handleOnPress}
    >
        <View style={{...styles.btnAddToCart, ...props.containerStyle}}>
            <Text style={{...styles.btnText, ...props.textStyle}}>{props.text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnAddToCart: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: GlobalStyles.lightOrange
    },
    textStyle: {fontSize: 19}
})

export default CartButton
