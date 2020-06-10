const mainColors = {
  dark1: '#1E1939',
  grey1: '#767676',
  grey2: '#D8D8D8',
  grey3: '#AAAAAA',
  grey4: '#D8D8D8',
  green1: '#05CAA6',
  green2: '#ECFFFC',
  green3: '#5BD67D',
  green4: '#1FB0B9',
  green5: '#55C2AF',
  orange1: '#D66F10',
  white: '#FFFFFF',
  black: '#000000',
};

export const colors = {
  primary: mainColors.dark1,
  secondary: mainColors.grey1,
  white: mainColors.white,
  black: mainColors.black,
  disabled: mainColors.grey4,
  border: mainColors.grey3,
  cardLight: mainColors.green5,
  orange: mainColors.orange1,
  button: {
    primary: {
      background: mainColors.dark1,
      text: 'white',
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey2,
      text: mainColors.grey3,
    },
  },
};
