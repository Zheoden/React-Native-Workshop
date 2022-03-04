import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { canNavigateBack } from '../../helpers/navigation';
import JestIDs from '../../utils/JestIdentifiers';
import { ITranslationHOCProps } from '../../localization/types';

export interface IPlaceholderScreenProps extends ITranslationHOCProps {
  title: string;
  navigation: NavigationStackProp<{}>;
}

export default class PlaceholderScreen extends React.PureComponent<IPlaceholderScreenProps> {
  render() {
    const canGoBack = canNavigateBack(this.props.navigation);
    const goBack = () => this.props.navigation.goBack();
    const PlaceHolderScreenIDs = JestIDs.modules.placeholder.placeHolderScreen;
    const t = this.props.translate;
    return (
      <View style={styles.container} accessibilityLabel={t('category')} testID={PlaceHolderScreenIDs.view.key}>
        <View style={styles.container}>
          <Text testID={PlaceHolderScreenIDs.text.key}>
            {this.props.title} with ID {this.props.navigation.getParam('id', 'N/A')}
          </Text>
        </View>
        <View style={styles.container}>
          {canGoBack && (
            <Button
              testID={PlaceHolderScreenIDs.goBack.button.key}
              accessibilityLabel={t('return')}
              title="Return"
              onPress={goBack}
            />
          )}
        </View>
      </View>
    );
  }
}

export function PlaceHolder(title: string): any {
  return (props: any) => <PlaceholderScreen {...props} title={title} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
