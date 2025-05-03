export function fromKebabCase(str) {
  return str
    .replace(/-([a-z])/g, (_, letter) => ` ${letter.toUpperCase()}`)
    .replace(/^([a-z])/, (_, letter) => letter.toUpperCase());
}

export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

