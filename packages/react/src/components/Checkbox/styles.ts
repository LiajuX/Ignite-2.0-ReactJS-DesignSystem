import * as Checkbox from '@radix-ui/react-checkbox'

import { keyframes, styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$6',
  height: '$6',

  boxSizing: 'border-box',
  border: '2x solid $ignite900',
  borderRadius: '$xs',

  backgroundColor: '$gray900',

  lineHeight: 0,

  cursor: 'pointer',
  overflow: 'hidden',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    borderColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',

  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
