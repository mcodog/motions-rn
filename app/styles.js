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
    lgContainer: {
        flex: 1,
        height: 300,
    },
    fluidContainer: {
        flex: 1
    }, 
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 1,
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
        padding: 5, 
        gap: 15,      
    },
    cardWrapper: {
        borderRadius: 16,
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
        borderRadius: 16,
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
        flex: 1,
    },
    card: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        padding: 10,
    },
    colCard: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        padding: 10,
        height: 450,
    },
    bordered: {
        borderWidth: 2,           
        borderColor: '#000',        
        borderRadius: 10,
    }
})

const fonts = StyleSheet.create({
    smFont: {
        fontSize: 14,
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
    }
})

export { defaultStyles, fonts }