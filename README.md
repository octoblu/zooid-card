# zooid-card

[![Build Status](https://travis-ci.org/octoblu/zooid-card.svg?branch=master)](https://travis-ci.org/octoblu/zooid-card)
[![npm version](https://badge.fury.io/js/zooid-card.svg)](http://badge.fury.io/js/zooid-card)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-card.png)](https://codeclimate.com/github/octoblu/zooid-card)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

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
