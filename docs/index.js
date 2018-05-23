import React from 'react'
import {
  ScopeProvider,
  withScope
} from '../src'

export default withScope(({
  scope: {
    Box,
    Flex,
    Heading,
    Text,
    Button
  }
}) => (
  <Box px={3} py={5}>
    <Heading>
      react-scope-provider
    </Heading>
  </Box>
))
