import { saveConfig } from '../utils/getConfig';

/**
 * @param {AppState} state
 * @param {Object} action
 * @returns {AppState}
 */
export const setConfig = (state, action) => {
  const { optionsName, value } = action.payload;
  const config = {
      ...state.config,
      [optionsName]: state.config[optionsName].map(option => {
        if (option.value === value) {
          return {
            value,
            isDefault: true,
          };
        }

        return {
          ...option,
          isDefault: false,
        };
      }),
    };

  saveConfig(config);

  return {
    ...state,
    config,
  };
};

/**
 * @param {String} optionsName
 * @param {Number} value
 * @returns {Object}
 */
export const setConfigAction = (optionsName, value) => ({
  type: 'SET_CONFIG',
  payload: {
    optionsName,
    value,
  },
});
