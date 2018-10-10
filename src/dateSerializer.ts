import {AttributeSerializer} from '@polymer/lit-element';
import {parse, format} from 'date-fns';

/**
 * Factory to create a serializer for a given date format
 *
 * @param {string} dateFormat Format to use
 * @return {AttributeSerializer} Serializer
 */
export function dateSerializer(dateFormat: string): AttributeSerializer {
  return {
    fromAttribute(v: string): Date|undefined {
      return parse(v, dateFormat, new Date());
    },
    toAttribute(v: Date): string|null {
      return format(v, dateFormat);
    },
  };
}
