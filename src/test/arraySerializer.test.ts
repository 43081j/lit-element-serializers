import {arraySerializer} from '../arraySerializer';
import {LitElement} from '@polymer/lit-element';

class TestElement extends LitElement {
  public prop?: unknown[];

  public static get properties() {
    return {
      prop: { type: arraySerializer, reflect: true }
    };
  }
}

customElements.define('test-element-array-serializer', TestElement);

describe('arraySerializer', () => {
  const fromAttribute = arraySerializer.fromAttribute!;
  const toAttribute = arraySerializer.toAttribute!;

  describe('fromAttribute', () => {
    it('should deserialize an array', () => {
      const result = fromAttribute('[1,2,3]');
      expect(result).toEqual([1, 2, 3]);
    });
    it('should be undefined if invalid array', () => {
      const result = fromAttribute('{}');
      expect(result).toBe(undefined);
    });
    it('should be undefined if invalid JSON', () => {
      const result = fromAttribute('!');
      expect(result).toBe(undefined);
    });
  });

  describe('toAttribute', () => {
    it('should serialize to JSON', () => {
      const result = toAttribute([1, 2, 3]);
      expect(result).toBe('[1,2,3]');
    });
  });

  describe('with element', () => {
    let node: TestElement;

    beforeEach(() => {
      node = document
        .createElement('test-element-array-serializer') as TestElement;
    });

    it('should deserialize attributes', () => {
      node.setAttribute('prop', '[1,2,3]');
      expect(node.prop).toEqual([1, 2, 3]);
    });

    it('should serialize properties', () => {
      node.prop = [4, 5, 6];
      expect(node.getAttribute('prop')).toBe('[4,5,6]');
    });
  });
});
