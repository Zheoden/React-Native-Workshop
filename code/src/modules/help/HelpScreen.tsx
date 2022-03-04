import React from 'react';
import { StatusBar, ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import {
  Header,
  ReloadInstructions,
  DebugInstructions,
  LearnMoreLinks,
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationStackProp } from 'react-navigation-stack';
import { canNavigateBack } from '../../helpers/navigation';
import JestIDs from '../../utils/JestIdentifiers';
import { ITranslationHOCProps } from '../../localization/types';
import { translationHOC } from '../../localization/hoc';

interface IHelpScreen extends ITranslationHOCProps {
  navigation: NavigationStackProp<{}>;
}

class HelpScreen extends React.PureComponent<IHelpScreen> {
  render() {
    const canGoBack = canNavigateBack(this.props.navigation);
    const goBack = () => this.props.navigation.goBack();
    const HeaderIDs = JestIDs.modules.help.helpScreen;
    const t = this.props.translate;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaProvider>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
            testID={HeaderIDs.scrollView.key}
          >
            <Header />
            <View style={styles.body} accessibilityLabel={t('helpPage')} testID={HeaderIDs.view.key}>
              <View style={styles.sectionContainer}>
                {canGoBack && (
                  <Button
                    title="Go Back"
                    accessibilityLabel={t('return')}
                    onPress={goBack}
                    testID={HeaderIDs.goBack.button.key}
                  />
                )}
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see
                  your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
});

export default translationHOC(HelpScreen);
