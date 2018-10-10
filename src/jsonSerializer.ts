import {AttributeSerializer} from '@polymer/lit-element';

export const jsonSerializer: AttributeSerializer = {
  fromAttribute(v: string): unknown {
    if (!v || v.trim() === '') {
      return undefined;
    }
    try {
      return JSON.parse(v);
    } catch (_err) {
      return undefined;
    }
  },
  toAttribute(v: unknown): string|null {
    return JSON.stringify(v);
  },
};
