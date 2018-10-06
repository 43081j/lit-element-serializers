import {AttributeSerializer} from '@polymer/lit-element';

export const nullableStringSerializer: AttributeSerializer = {
  fromAttribute(v: string): string|null {
    return v && v.trim() !== '' ? v : null;
  },
  toAttribute(v: string|null|undefined): string|null {
    return v ? `${v}` : null;
  },
};
