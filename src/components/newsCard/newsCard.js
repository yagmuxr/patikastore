import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './newsCard.style';

const NewsCard = (props) =>
{
    return(
      <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.top}>
          <Image style={styles.image} source={{ uri: props.imgURL }} />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>{props.price}</Text>
          <Text style={styles.inStock}>{props.inStock}</Text>
        </View>
      </View>
    </View>
    );
};

export default NewsCard;