import React from 'react';
import { useTranslation } from 'react-i18next';
import JestIDs from '../utils/JestIdentifiers';

export const translationHOC = (Component: any): any => {
  return (props: any) => {
    const { t, i18n } = useTranslation();
    return <Component testID={JestIDs.localization.hoc.key} translate={t} setTranslate={i18n} {...props} />;
  };
};
