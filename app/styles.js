import { StyleSheet, StatusBar } from "react-native";

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f6fb',
        padding: 10,
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20,       
    },
    titleContainer: {
        height: 50,
    },  
    smContainer: {
        height: 50,
    },
    lgContainer: {
        height: 300,
    },
    xlContainer: {
        height: 400,
    },
    fluidContainer: {
        flex: 1
    }, 
    barStack: {
        flexDirection: 'column',
        gap:10,
    }, 
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 1,
    },
    xyCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },  
    spaced: {
        marginTop: 10,
        marginBottom: 10
    },
    deckRow: {
        flexDirection: 'row',
        padding: 5, 
        gap: 10,      
    },
    deckCol: {
        flex: 1,
        flexDirection: 'column',
        padding: 10, 
        gap: 15,  
    },
    cardWrapper: {
        borderRadius: 32,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
    },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        flex: 1,
        height: 200,
    },
    colCardWrapper: {
        borderRadius: 32,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
    },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        flex: 1,
        flexDirection: 'row'
    },
    barWrapper: {

        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
    },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 32,
    },
    centerCardWrapper: {
        borderRadius: 32,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
    },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        flex: 1,
        flexDirection: 'row',
        margin:50,
    },
    bar: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 32,
        overflow: 'hidden',
        padding: 10,
        height: 100,
    },  
    lgBar: {
        height: 180
    },
    card: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 32,
        overflow: 'hidden',
        padding: 10,
    },
    colCard: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 32,
        overflow: 'hidden',
        padding: 10,
        height: 450,
        
    },
    centerCard: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 32,
        overflow: 'hidden',
        padding: 0,
    },  
    bordered: {
        borderWidth: 2,           
        borderColor: '#000',        
        borderRadius: 10,
    },
    margined: {
        margin:50,
    },
    imageContained: {
        flex:1,
        height:'100%'
    },
    smLeft: {
        flex: 1
    },
    lgRight: {
        flex: 3
    },
    roundedCorner: {
        borderRadius: 16 
    }
})

const fonts = StyleSheet.create({
    smFont: {
        fontSize: 16,
        fontFamily: 'creato',
    },
    mdFont: {
        fontSize: 20,
        fontFamily: 'creato',
    },
    lgFont: {
        fontSize: 24,
        fontFamily: 'creato',
    },
    xlFont: {
        fontSize: 34,
        fontFamily: 'creato',
    },

    emphasize: {
        fontFamily: 'heavitas'
    },
    bold: {
        fontWeight: 800,
    },
    light: {
        color: 'white'
    },
    fade: {
        color: '#D2D2D2',
    },
    fadeLight: {
        color: '#7b7b7b',
    },
    center: {
        textAlign: 'center',
    }
})

const backgrounds = StyleSheet.create({
    profileBackground: {
        position: 'absolute',
        top: '-25%',
        left: '-4%',
        height: 800,
        width: '112%',
        borderRadius: 80,
        backgroundColor: '#1b2a48',
    }
})

const collectionItems = StyleSheet.create({
    coachCard: {
        flexDirection: 'row',
        padding: 20,
        gap: 10,
    }
})

export { defaultStyles, fonts, backgrounds, collectionItems }