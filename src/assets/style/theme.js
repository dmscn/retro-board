import { themes } from '@gympass/yoga'
import tokens from '@gympass/yoga-tokens'

const { colors, ...yogaThemes } = themes.Wellness(tokens)

export default {
  yoga: {
    ...yogaThemes,
    colors: {
      ...colors,
      tertiary: tokens.colors.newYork,
    },
  },
}
