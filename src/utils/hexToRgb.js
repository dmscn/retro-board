export default function hexToRgb(hex, opacity = 1) {
  const h = hex.replace('#', '')

  const isShortened = h.length === 3
  const step = isShortened ? 1 : 2
  const bIndex = isShortened ? 2 : 4

  const parse = from =>
    parseInt(h.slice(from, from + step).repeat(isShortened ? 2 : 1), 16)

  return `rgba(${parse(0)}, ${parse(step)}, ${parse(bIndex)}, ${opacity})`
}
