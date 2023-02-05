import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const Empty = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },
    text: {
        color: GlobalStyles.green,
        fontSize: 19
    }
})

export default Empty
