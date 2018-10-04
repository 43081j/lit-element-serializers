export const objectSerializer = {
  fromAttribute(v: string): unknown {
    return JSON.parse(v);
  },
  toAttribute(v: unknown): string {
    return JSON.stringify(v);
  },
};
