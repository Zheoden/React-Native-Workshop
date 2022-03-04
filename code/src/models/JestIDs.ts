/**
 * This function returns the IDs schema user for testing.
 * Don't add any return type.
 *
 * @param ID Placeholder value provided on run-time to determine RN tree keys.
 */
function RNJestCollection<T = string>(ID: T) {
  return {
    localization: {
      hoc: ID
    },
    modules: {
      help: {
        helpScreen: {
          scrollView: ID,
          view: ID,
          goBack: {
            button: ID
          },
          container: ID
        }
      },
      home: {
        homeScreen: {
          goToHelp: ID,
          goToCategory1: ID,
          goToCategory2: ID,
          toggleLanguage: ID
        }
      },
      placeholder: {
        placeHolderScreen: {
          view: ID,
          text: ID,
          goBack: {
            button: ID
          }
        }
      }
    }
  };
}

export default RNJestCollection;
