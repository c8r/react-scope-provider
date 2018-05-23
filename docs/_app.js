import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button
} from 'rebass'
import { ScopeProvider } from '../src'

const scope = {
  Box,
  Flex,
  Heading,
  Text,
  Button
}

export default ({
  render
}) => (
  <ScopeProvider scope={scope}>
    {render()}
  </ScopeProvider>
)
