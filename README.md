
# react-scope-provider

```sh
npm i react-scope-provider
```

```jsx
// App.js
import React from 'react'
import { ScopeProvider } from 'react-scope-provider'
import View from './View'
import scope from './scope'

export default () => (
  <ScopeProvider scope={scope}>
    <View />
  </ScopeProvider>
)
```

```jsx
// View.js
import React from 'react'
import { ScopeConsumer } from 'react-scope-provider'

export default props => (
  <ScopeConsumer>
    {({
      // scope can be any value, even React components
      Box,
      Heading,
    }) => (
      <Box>
        <Heading>View</Heading>
      </Box>
    )}
  </ScopeConsumer>
)
```

A default scope can be provided to the consumer when it's used outside of a provider.

```jsx
// View.js with default scope
import React from 'react'
import { ScopeConsumer } from 'react-scope-provider'

export default props => (
  <ScopeConsumer defaultScope={scope}>
    {({
      Box,
      Heading,
    }) => (
      <Box>
        <Heading>View</Heading>
      </Box>
    )}
  </ScopeConsumer>
)
```

## HOC

```jsx
import React from 'react'
import { withScope } from 'react-scope-provider'

export default withScope(({
  scope: {
    Box,
    Heading
  }
}) => (
  <Box>
    <Heading>Hello</Heading>
  </Box>
))
```
