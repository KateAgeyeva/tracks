// import '../_mockLocations';
import React, { useContext, useEffect } from "react";
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native';
import useLocation from "../hooks/useLocation";

import Map from '../components/Map';
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
    const { state, addLocation } = useContext(LocationContext);
    const isFocused = useIsFocused();
    const [err] = useLocation(isFocused, (location) => {
      addLocation(location, state.recording)
    });
    return (
      isFocused &&
      (<SafeAreaView forceInset={{ top: "always" }}>
        <Text h2>Create a Track</Text>
        <Map />
        {err && <Text>Please enable location services</Text>}
        <TrackForm />
      </SafeAreaView>) 
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

// my current location (Amsterdam home):
//"latitude": 52.37263461355175,
//"longitude": 4.964958520504552,