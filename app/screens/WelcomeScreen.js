import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';

// Styling 
import { defaultStyles, fonts } from '../styles';
import { loadFonts } from '../utils/fonts';

function WelcomeScreen(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

    useEffect(() => {
        loadFonts();
    }, [])

    return (
        <View style={defaultStyles.container}>
            <ScrollView>
                <Text style={fonts.lgFont}>
                    Good Morning,
                </Text>
                <Text style={[fonts.xlFont, fonts.emphasize]}>
                    Mark Codog!
                </Text>
                <View style={defaultStyles.spaced}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                    />
                </View>
                <View style={defaultStyles.deckRow}>
                    <View style={defaultStyles.cardWrapper}>
                        <View style={defaultStyles.card}>
                            <Text>1</Text>
                        </View>
                    </View>
                    <View style={defaultStyles.cardWrapper}>
                        <View style={defaultStyles.card}>
                            <Text>2</Text>
                        </View>
                    </View>
                    <View style={defaultStyles.cardWrapper}>
                        <View style={defaultStyles.card}>
                            <Text>3</Text>
                        </View>
                    </View>
                </View>
                <View style={[defaultStyles.lgContainer, defaultStyles.spaced]}>
                    <View style={defaultStyles.cardWrapper}>
                        <View style={defaultStyles.card}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>
                <View style={[defaultStyles.fluidContainer]}>
                    <View style={[defaultStyles.titleContainer, defaultStyles.spaceBetween, defaultStyles.alignCenter]}>
                        <Text style={[fonts.lgFont, fonts.emphasize]}>Some Feature</Text>
                        <Text style={fonts.mdFont}>View All</Text>
                    </View>
                    <View style={defaultStyles.deckCol}>
                        <View style={defaultStyles.colCardWrapper}>
                            <View style={defaultStyles.colCard}>
                                <Text>1</Text>
                            </View>
                        </View>
                        <View style={defaultStyles.colCardWrapper}>
                            <View style={defaultStyles.colCard}>
                                <Text>1</Text>
                            </View>
                        </View>
                        <View style={defaultStyles.colCardWrapper}>
                            <View style={defaultStyles.colCard}>
                                <Text>1</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default WelcomeScreen;