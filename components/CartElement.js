import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import GlobalStyles from '../styles/GlobalStyles'
import CartButton from './CartButton'

const CartElement = (props) => {
    return (
        <View style={styles.cartContainer}>
            <Text numberOfLines={1} style={styles.cartItemTitle}>{props.title}</Text>
            <Text numberOfLines={1} style={styles.cartItemPrice}>{props.price.toFixed(2)} €</Text>
            <TouchableOpacity
                onPress={props.handleDelete}
                style={styles.btnDelete}
            >
                <MaterialIcons name="delete" size={24} color={GlobalStyles.green} />
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    cartContainer: {
        backgroundColor: GlobalStyles.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 9
    },
    cartItemTitle: {
        width: '60%'
    },
    cartItemPrice: {
        textAlign: 'right',
        paddingRight: 9,
        width: '35%'
    },
    btnDelete: {
        width: '5%'
    }
})

export default CartElement
