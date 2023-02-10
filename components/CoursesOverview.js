import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const CoursesOverview = (props) => {
    return (
        <View style={styles.courseContainer}>
            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price.toFixed(2)} €</Text>
        </View>
  )
}

export default CoursesOverview

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: GlobalStyles.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 20
    },
    title: {
        width: '70%'
    },
    price: {
        color: GlobalStyles.dimGray
    }
})