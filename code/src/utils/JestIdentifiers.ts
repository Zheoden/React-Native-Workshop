import RNJestCollection from '../models/JestIDs';

export const JEST_ID_DELIMITER = ' ';

export type OptionalArgument = string | number | null | undefined;

export type Dictionary<T, K> = { [key in keyof T]: K };

export type JestStorage<T> = { [key: string]: JestStorage<T> | T };

export type AppTree = ReturnType<typeof buildComponentIDs>;

export interface KeyManipulation {
  readonly index?: ReadonlyArray<OptionalArgument> | Readonly<OptionalArgument>;
}

export interface ID {
  readonly key: Readonly<string>;
  withArguments(params: KeyManipulation): Readonly<string>;
}

function appendArguments(id: string, options: KeyManipulation): string {
  const { index: suffix } = options;
  const components: Array<string> = [id];
  const hasNoSuffix = suffix === null || suffix === undefined;

  if (!hasNoSuffix) {
    const suffixArgs = Array.isArray(suffix) ? suffix : [suffix];
    suffixArgs.forEach(value => {
      if (value !== null && value !== undefined) {
        components.push(value.toString());
      }
    });
  }

  return components.join(JEST_ID_DELIMITER);
}

function ID(value: string): ID {
  return {
    key: value,
    withArguments: (options: KeyManipulation): string => {
      return appendArguments(value, {
        index: options.index
      });
    }
  };
}

function mergeProperties<T>(first: T, second: T): T {
  return { ...first, ...second };
}

function decamelize(value: string): string {
  const separator = '-';
  return value
    .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
    .toLowerCase();
}

function processAppStorage(store: JestStorage<string>, path?: string): JestStorage<ID> {
  const ids: JestStorage<ID> = Object.entries(store)
    .map(entry => {
      const [key, value] = entry;
      const route = ID([path, decamelize(key)].join(JEST_ID_DELIMITER).trim());

      if (typeof value !== 'string') {
        const tree = processAppStorage(value as JestStorage<string>, route.key);
        return { [key]: tree };
      }

      return { [key]: route } as JestStorage<ID>;
    })
    .reduce(mergeProperties);

  return ids;
}

function buildComponentIDs() {
  const IdNotProceededMessage = 'undefined';
  const template = RNJestCollection(IdNotProceededMessage);
  const formatter = RNJestCollection<ID>({
    key: IdNotProceededMessage,
    withArguments: () => IdNotProceededMessage
  });

  return processAppStorage(template) as typeof formatter;
}

export default buildComponentIDs();
