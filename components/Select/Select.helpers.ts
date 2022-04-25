import React from 'react';

export function getDisplayedValue(value: any, children: React.ReactElement) {
  /* We are using the React.Children.toArray method 
  to ensure that the children prop is always an array. */
  const childArray: any = React.Children.toArray(children);
  const selectedChild = childArray.find(child => child.props.value === value);

  return selectedChild.props.children;
}
