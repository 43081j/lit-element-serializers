export const nullableString = {
  fromAttribute(v: string): string|null {
    return v && v.trim() !== '' ? v : null;
  },
  toAttribute(v: string|null|undefined): string|null {
    return v ? `${v}` : null;
  },
};
