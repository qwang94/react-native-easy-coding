import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Empty from '../components/Empty';
import PaidItem from '../components/PaidItem';

const Payments = () => {

    const payments = useSelector(state => state.payments.payments);

    if (payments.length > 0) {
        return (
            <FlatList 
                data={payments}
                keyExtractor={ item => item.id}
                renderItem={({item}) => (
                    <PaidItem
                        totalPrice={item.total}
                        date={item.date}
                        courseDetails={item}
                    />
                )}
            />
        )
    }
    
    return <Empty text="Vous n'avez encore acheté aucun cours" />
}

const styles = StyleSheet.create({})


export default Payments
