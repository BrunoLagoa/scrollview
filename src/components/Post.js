import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

const white = "#FFF";
const title = "#333";

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
    <View style={styles.separetor} />
    <Text style={styles.content}>{data.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20
  },

  author: {
    fontWeight: "bold"
  },

  separetor: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 5
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: title
  }
});

export default Post;
