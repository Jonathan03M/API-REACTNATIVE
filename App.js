import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
  

export default function App() {
  const [personajes, setPersonajes] = useState([]);

  const handleClick = async () => {
    const response = await fetch('https://apisimpsons.fly.dev/api/personajes');
    const data = await response.json();
    setPersonajes(data);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.Imagen }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.Nombre}</Text>
        <Text style={styles.itemEstado}><Text style={styles.Estado}>Estado:</Text> {item.Estado}</Text>
        <Text style={styles.Genero}><Text style={styles.Estado}>Genero: </Text>{item.Genero}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Abir Listado - Los simpsons</Text>
      <Button style={styles.boton} onPress={handleClick} title="Desplegar" />
      <View style={styles.listContainer}>
        <FlatList 
          data={personajes.docs}
          renderItem={renderItem}
          numColumns={5}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: 250,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemImage: {
    width: 300,
    height: 350,
    resizeMode: "contain",
  },
  text: {
    fontSize: 100,
    color: 'black',
  },
  itemEstado: {
    color: 'red',
    fontSize: 20,
  },
  Estado: {
    color: 'black',
    fontSize: 20,
  },
  Genero: {
    fontSize: 20,
    color: 'blue'
  }


});
