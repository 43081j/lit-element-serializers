# lit-element-serializers

A selection of common attribute serializers for use with
[LitElement](https://github.com/polymer/lit-element).

These allow simple (de)serialization around common data structures such
as objects, dates, strings and so on.

## Install

Simple:

```
$ npm i -S lit-element-serializers
```

## Usage

To use these:

```js
import { NullableStringSerializer } from 'lit-element-serializers';

class MyElement extends LitElement {
  @property({ type: NullableStringSerializer })
  foo = 'test';
}
```

## Serializers

### `NullableStringSerializer`

The nullable string serializer allows easy serialization between string values
and `null` or the given value, meaning falsy strings will be treated and set
on your element as `null`.

### `ObjectSerializer`

Simply a wrapper around `JSON.parse` and `JSON.stringify`, so any value
passed to the property using this serializer will attempt to parse or output
JSON.

This behaves similar to how `type: Object` did in Polymer.
