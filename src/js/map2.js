export const defaultSetting = new Map();
export const userSettiging = new Map();

export default class Settings {
  constructor(theme, music, difficulty) {
    defaultSetting.set(this, {
      theme: 'dark',
      music: 'trance',
      difficulty: 'easy',
    });
    userSettiging.set(this, {
      theme,
      music,
      difficulty,
    });
  }

  settings() {
    return userSettiging.get(this);
  }
}

// module.exports = {
//   defaultSetting,
//   userSettiging,
// };
