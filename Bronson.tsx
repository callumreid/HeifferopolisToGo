import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Bronson = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bronson</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rebeccapurple',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
})

export default Bronson
