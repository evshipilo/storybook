// import '../src/lib/Theme/theme.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // themes: {
  //   default: 'Apollo',
  //   list: [
  //     { name: 'Apollo', class: 'theme-apollo', color: '#00aced' },
  //   ],
  // },
}