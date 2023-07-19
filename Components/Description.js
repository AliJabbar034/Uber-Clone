import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements'
const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London,UK'
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye,London,UK'
  },
]
const Description = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View style={{ height: 0.5, backgroundColor: '#c9c9c9' }}

        />

      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <Icon
            style={styles.icon}
            name={item.icon}
            type='ionicon'
            color='white'
            size={18} />

          <View>
            <Text style={styles.loc}>{item.location}</Text>
            <Text style={styles.destination}>{item.destination}</Text>
          </View>
        </TouchableOpacity>

      )}
      keyExtractor={(item) => (item.id)}
    />
  )
}

export default Description

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  icon: {
    marginRight: 20,
    padding: 12,
    borderRadius: 9999,
    backgroundColor: 'gray'
  },
  loc: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 28

  },
  destination: {
    color: '#c9c9c9'
  }
})

