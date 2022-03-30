import React, { useEffect, useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    const tracklist = navigation.addListener("focus", () => {
      fetchTracks();
    });
    return tracklist;
  }, [navigation]);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

