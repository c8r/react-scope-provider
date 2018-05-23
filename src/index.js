import React from 'react'
import PropTypes from 'prop-types'

export const Scope = React.createContext(null)

export const ScopeProvider = ({ scope, ...props }) => (
  <Scope.Provider
    {...props}
    value={scope}
  />
)

ScopeProvider.propTypes = {
  scope: PropTypes.object.isRequired
}

export const ScopeConsumer = ({ defaultScope = {}, ...props }) => (
  <Scope.Consumer>
    {maybeScope => maybeScope ? (
      props.children(maybeScope)
    ) : (
      <Scope.Provider value={defaultScope}>
        <Scope.Consumer {...props} />
      </Scope.Provider>
    )}
  </Scope.Consumer>
)

ScopeConsumer.propTypes = {
  defaultScope: PropTypes.object
}

export const withScope = Component => ({ defaultScope, ...props }) => (
  <ScopeConsumer defaultScope={defaultScope}>
    {scope => (
      <Component
        {...props}
        scope={scope}
      />
    )}
  </ScopeConsumer>
)
