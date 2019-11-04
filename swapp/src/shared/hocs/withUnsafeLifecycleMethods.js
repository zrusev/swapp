import React from 'react';

const UNSAFE_LIFECYCLE_METHOD_NAMES = [
  'componentWillMount',
  'componentWillReceiveProps',
  'componentWillUpdate',
];

const withUnsafeLifecycleMethods = WrappedComponent => {
  const hocComponent = props => {
    const { prototype } = WrappedComponent;

    UNSAFE_LIFECYCLE_METHOD_NAMES.forEach(methodName => {
      if (!prototype[methodName]) return;

      Object.defineProperty(prototype, `UNSAFE_${methodName}`, {
        configurable: true,
        value: prototype[methodName],
        writable: true,
      });

      Reflect.deleteProperty(prototype, methodName);
    });

    return <WrappedComponent {...props} />;
  };

  hocComponent.displayName = `withUnsafeLifecycleMethods(${WrappedComponent.displayName ||
    ''})`;

  return hocComponent;
};

export default withUnsafeLifecycleMethods;
