import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Card from '../src'

storiesOf('Card', module)
  .addWithInfo('Basic', '', () => (
    <Card>
      <h1>Fresh Prince Of Bel-Air (Theme Song)</h1>

      <p>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there
        I'll tell you how I became the prince of a town called Bel-Air
      </p>
    </Card>

  ), { inline: true })
