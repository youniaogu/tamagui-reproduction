import { Input as TMInput, styled } from 'tamagui'

const StyledInput = styled(TMInput, {
  placeholderTextColor: '$gray11',
  borderColor: '$color.gray11Light',
  display: 'block',
  paddingVertical: '$0.75',
  paddingHorizontal: '$1.25',
  focusStyle: {
    outlineColor: '$gray10',
    borderColor: '$gray10',
    outlineWidth: 0,
  },
})

export const CustomInput = StyledInput
