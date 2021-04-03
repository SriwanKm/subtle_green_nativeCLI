import React from 'react';
import {
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const pressed = () => {
    console.log("I'm pressed");
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.mainHeader}>A Subtle Green</Text>
          <Text style={styles.subHeader}>A design by Bryant Smith.</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LinearGradient colors={['#dff8fd', '#94c2cc']} style={styles.navBar}>
            <TouchableHighlight underlayColor="#94c2cc" onPress={pressed}>
              <Text style={styles.navText}>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#94c2cc" onPress={pressed}>
              <Text style={styles.navText}>About</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#94c2cc" onPress={pressed}>
              <Text style={styles.navText}>Portfolio</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#94c2cc" onPress={pressed}>
              <Text style={styles.navText}>Services</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#94c2cc" onPress={pressed}>
              <Text style={styles.navText}>Contact</Text>
            </TouchableHighlight>
          </LinearGradient>
        </ScrollView>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>The Article Title</Text>
          </View>
          <View style={styles.sectionDetails}>
            <Text style={styles.sectionDetailsText}>
              You may use this template on any site, anywhere, for free just
              please leave the link back to me in the footer. This template
              validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
            </Text>
            <Text style={styles.sectionDetailsText}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer
              mi. Vivamus sit amet neque vitae sapien bibendum sodales.
              Curabitur elementum. Duis imperdiet. Donec eleifend porttitor
              sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse
              potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit
              dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis.
              Sed vehicula pellentesque quam.
            </Text>
            <Text style={styles.sectionDetailsText}>
              Vestibulum augue quam, interdum id, congue semper, convallis non,
              velit. Quisque augue tortor, tristique ac, scelerisque eget,
              aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis,
              laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc
              scelerisque venenatis urna. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Fusce
              congue, turpis ut commodo mattis, pede erat fringilla tellus,
              pulvinar suscipit odio lorem sed pede.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>web development by bryant smith</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    backgroundColor: '#94c2cc',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  mainHeader: {
    color: '#293438',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#eefcff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 28,
  },
  navBar: {
    flexDirection: 'row',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 2,
  },
  navText: {
    paddingHorizontal: 35,
    color: '#252f33',
    padding: 18,
    fontWeight: 'bold',
  },
  navTextActive: {
    color: '#bfd3b7',
    padding: 15,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#869d80',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionDetails: {},
  sectionHeaderText: {
    color: '#2e4b6c',
    fontWeight: 'bold',
    fontSize: 25,
  },
  sectionDetailsText: {
    fontSize: 15,
    lineHeight: 28,
    marginBottom: 18,
  },
  readMore: {
    fontSize: 14,
    marginTop: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: '#869d80',
  },
  footerText: {
    color: '#4d5c4b',
  },
});
export default App;
