import {AttributeSerializer} from '@polymer/lit-element';

export const objectSerializer: AttributeSerializer = {
  fromAttribute(v: string): unknown {
    if (!v || v.trim() === '') {
      return null;
    }
    return JSON.parse(v);
  },
  toAttribute(v: unknown): string {
    return JSON.stringify(v);
  },
};
