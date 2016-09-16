# zooid-card

[![Build Status](https://travis-ci.org/octoblu/zooid-card.svg?branch=master)](https://travis-ci.org/octoblu/zooid-card)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-card/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-card)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-card.svg?style=flat)](https://david-dm.org/octoblu/zooid-card)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-card.svg?style=flat)](https://david-dm.org/octoblu/zooid-card#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-card.svg?style=flat)](https://npmjs.org/package/zooid-card)

A card styled container component.

## Install
```
npm install --save zooid-card
```

## Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| children | node |         | Children... |
| className | string |         | Additional css classes to merge into the component |

## Example
```js
import Card from 'zooid-card'

<Card>
  <h1>Fresh Prince Of Bel-Air (Theme Song)</h1>

  <p>
    Now, this is a story all about how
    My life got flipped-turned upside down
  </p>
</Card>

```
