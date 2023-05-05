import env from 'postcss-preset-env'

const config = {
  plugins: [
    env({
      stage: false,
      features: {
        'oklab-function': true,
      },
    }),
  ],
}

export default config
