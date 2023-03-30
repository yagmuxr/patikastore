import React from "react";
import {View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Dimensions} from 'react-native';
import news_data from './news_data.json';
import NewsCard from "./components/newsCard";

const App = () => {
    //const renderNews = ({item}) => <NewsCard news={item}/>
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>PATIKASTORE</Text>
          <TextInput style={styles.search_bar} placeholder="Ara..."></TextInput>
        </View>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={news_data}
            numColumns={2}
            renderItem={({ item }) => (
              <NewsCard
                imgURL={item.imgURL}
                title={item.title}
                price={item.price}
                inStock={item.inStock ? "" : "STOKTA YOK"}
              />
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
    },
    header: {
      padding: 10,
    },
    header_text: {
      color: "#800080",
      fontSize: 25,
      fontWeight: "bold",
      margin: 5,
      marginLeft: 0,
    },
    search_bar: {
      padding: 10,
      backgroundColor: "#ECEFF1",
      borderRadius: 10,
    },
    scrollView: {
      marginHorizontal: 20,
    },
  });
  
export default App;

