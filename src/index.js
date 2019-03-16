import "./config/ReactotronConfig";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

import Post from "./components/Post";

const white = "#FFF";
const primary = "#EE7777";
const title = "#333";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Bruno Castro",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Bruno Castro",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Bruno Castro",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 4,
        title: "Aprendendo React Native",
        author: "Bruno Castro",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    paddingBottom: 20
  },

  header: {
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },

  headerTitle: {
    color: title,
    fontSize: 22,
    fontWeight: "bold"
  }
});
