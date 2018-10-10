import {AttributeSerializer} from '@polymer/lit-element';

export const arraySerializer: AttributeSerializer = {
  fromAttribute(v: string): unknown[]|undefined {
    try {
      const obj = JSON.parse(v);
      if (!Array.isArray(obj)) {
        return undefined;
      }
      return obj;
    } catch (_err) {
      return undefined;
    }
  },
  toAttribute(v: unknown[]): string|null {
    return JSON.stringify(v);
  },
};
