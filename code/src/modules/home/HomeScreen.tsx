import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { connect } from 'react-redux';
import IStoreState from '../../store/IStoreState';
import { routeNames } from '../../navigation/utils';
import i18next from '../../localization/i18n';
import { translationHOC } from '../../localization/hoc';
import { ITranslationHOCProps } from '../../localization/types';
import { IHomeState } from './state';
import { homeChangeLng } from './actions';
import JestIDs from '../../utils/JestIdentifiers';
import NativeModuleExample from '../../native-modules/NativeModuleExample';

interface IHomeProps extends ITranslationHOCProps {
  navigation: NavigationStackProp<{}>;
  home: IHomeState;
  homeChangeLng: (language: string) => void;
}

class HomeScreen extends React.PureComponent<IHomeProps> {
  constructor(props: IHomeProps) {
    super(props);
    this.onLanguageChanged = this.onLanguageChanged.bind(this);
  }

  componentDidMount() {
    this.props.homeChangeLng(i18next.language);
  }

  onLanguageChanged(newLng: string) {
    // this.setState({ lng: newLng }, () => i18next.changeLanguage(newLng));
    i18next.changeLanguage(newLng);
    this.props.homeChangeLng(newLng);
  }

  render() {
    const { navigate } = this.props.navigation;
    const t = this.props.translate;
    const HomeScreenIDs = JestIDs.modules.home.homeScreen;
    return (
      <View accessibilityLabel={t('homePage')}>
        <Button
          testID={HomeScreenIDs.goToHelp.key}
          accessibilityLabel={t('go to help')}
          title={t('go to help')}
          onPress={() =>
            navigate(routeNames.Help, {
              id: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          accessibilityLabel={`${t('go to category')} 1`}
          testID={HomeScreenIDs.goToCategory1.key}
          title={`${t('go to category')} 1`}
          onPress={() =>
            navigate(routeNames.Category1, {
              id: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          accessibilityLabel={`${t('go to category')} 2`}
          testID={HomeScreenIDs.goToCategory2.key}
          title={`${t('go to category')} 2`}
          onPress={() =>
            navigate(routeNames.Category2, {
              id: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          accessibilityLabel={`${t('toggle')} ${t('current language')}`}
          testID={HomeScreenIDs.toggleLanguage.key}
          title={`${t('toggle')} ${t('current language')}`}
          onPress={() => this.onLanguageChanged(this.props.home.lng === 'en' ? 'es' : 'en')}
        />
        <Text style={styles.text}>{`${t('nativeLanguage')}${NativeModuleExample.getNativeLanguage()}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (
  state: IStoreState
): {
  home: IHomeState;
} => ({
  home: state.home
});

const mapDispatchToProps = {
  homeChangeLng
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translationHOC(HomeScreen));
