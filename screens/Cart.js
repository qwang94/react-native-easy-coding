import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Empty from '../components/Empty';
import CartElement from '../components/CartElement';
import GlobalStyles from '../styles/GlobalStyles';
import CartButton from '../components/CartButton';
import { removeFromCart } from '../redux/actions/ActionRemoveFromCart';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleDelete = (courseId) => {
        dispatch(removeFromCart(courseId));
        alert('supprimé');
    }

    return (
        <View style={styles.cartContainer}>
            {
                cart.cartCourses.length > 0 ? (
                    <View>
                        <FlatList 
                            data={cart.cartCourses}
                            keyExtractor={ item => item.id}
                            renderItem={({item}) => (
                                <CartElement 
                                    title={item.title}
                                    price={item.price}
                                    handleDelete={() => handleDelete(item.id)}
                                />
                            )}
                        />
                        <View style={styles.cartTotalContainer}>
                            <Text style={styles.cartTotalText}>
                                Total: 
                                <Text style={styles.cartTotalPrice}> {cart.total.toFixed(2)} €</Text>
                            </Text>
                            <CartButton
                                handleOnPress={() => alert('payer')}
                                containerStyle={styles.btnPayment}
                                text="Payer"
                            />
                        </View>
                    </View>
                ) : (
                    <Empty text="Panier vide :(" />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        margin: 20
    },
    cartTotalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 19
    },
    cartTotalText: {
        fontWeight: 'bold',
        fontSize: 19
    },
    cartTotalPrice: {
        color: GlobalStyles.green
    },
    btnPayment: {
        backgroundColor: GlobalStyles.orange
    }
})

export default Cart
