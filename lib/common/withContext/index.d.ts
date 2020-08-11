import React from 'react';
export default function<CP>(
  Context: React.Context<CP>,
  shouldRender?: (context: CP) => boolean,
): <P extends CP, T = unknown>(
  WrappedComponent: React.ComponentType<P>,
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Pick<React.PropsWithChildren<P>, Exclude<keyof P, keyof CP> | Exclude<'children', keyof CP>>> &
    React.RefAttributes<T>
>;
