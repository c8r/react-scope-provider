import test from 'ava'
import React from 'react'
import { create } from 'react-test-renderer'
import {
  ScopeProvider,
  ScopeConsumer,
  withScope,
} from './src'

const Box = props => <div {...props} className='Box' />

const scope = {
  Box
}

test('ScopeProvider renders', t => {
  const json = create(
    <ScopeProvider scope={scope}>
      Provider
    </ScopeProvider>
  ).toJSON()
  t.snapshot(json)
})

test('ScopeConsumer renders', t => {
  const json = create(
    <ScopeProvider scope={scope}>
      <ScopeConsumer>
        {({ Box }) => (
          <Box>
            Consumer
          </Box>
        )}
      </ScopeConsumer>
    </ScopeProvider>
  ).toJSON()
  t.snapshot(json)
})

test('ScopeConsumer renders with defaultScope', t => {
  const json = create(
    <ScopeConsumer defaultScope={scope}>
      {(scope) => (
        <Box>
          Consumer
        </Box>
      )}
    </ScopeConsumer>
  ).toJSON()
  t.snapshot(json)
})

test('withScope component renders', t => {
  const Hello = withScope(({
    scope: {
      Box
    }
  }) => (
    <Box>Hello</Box>
  ))
  const json = create(
    <ScopeProvider scope={scope}>
      <Hello />
    </ScopeProvider>
  ).toJSON()
  t.snapshot(json)
})
