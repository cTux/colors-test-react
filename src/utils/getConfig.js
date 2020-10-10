import ls from 'local-storage';
import { defaultConfig } from './getConfig.default';

const configKeyName = 'config',
  versionKeyName = 'version',
  version = '1';

/**
 * @returns {AppStateConfig}
 */
export const getConfig = () => {
  return ls(configKeyName) || defaultConfig;
};

export const saveConfig = (config) => {
  ls(configKeyName, config);
};

/**
 * @type {String}
 */
const gotVersion = ls(versionKeyName);

if (gotVersion && gotVersion !== version) {
  ls.remove(configKeyName);
}

ls(versionKeyName, version);
