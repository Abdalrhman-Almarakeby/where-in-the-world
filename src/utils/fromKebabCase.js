export function fromKebabCase(str) {
  return str
    .replace(/-([a-z])/g, (match, letter) => " " + letter.toUpperCase())
    .replace(/^([a-z])/, (match, letter) => letter.toUpperCase());
}
