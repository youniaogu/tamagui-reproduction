import { SizableText, styled } from 'tamagui'

export const CustomText = styled(SizableText, {
  name: 'CustomText',
  variants: {
    variant: {
      subTitle1: {
        color: '$color.gray12Light',
        size: '$6',
        fontStyle: 'normal',
      },
      subTitle2: {
        color: '$color.gray12Light',
        fontStyle: 'normal',
        size: '$5',
      },
      body1: {
        color: '$color.gray12Light',
        size: '$4',
        fontStyle: 'normal',
      },
      body2: {
        color: '$color.gray12Light',
        size: '$3',
        fontStyle: 'normal',
      },
      caption1: {
        color: '$color.gray11Light',
        size: '$2',
        fontStyle: 'normal',
      },
      caption2: {
        color: '$color.gray9Light',
        size: '$1',
        fontStyle: 'normal',
      },
    } as const,
    errored: {
      true: {
        color: '$red10',
      },
    },
  },
})
