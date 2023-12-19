import { Label, LabelProps, YStack, styled } from 'tamagui'
import { CustomText } from './CustomText'

export interface WithFiledItemProps {
  label?: string
  instruction?: string
  required?: boolean
  error?: string
  name: string
  layout?: 'vertical' | 'horizontal'
  labelStyle?: LabelProps['style']
}

export interface FieldItem {
  name?: string
  onChange?: (value: any) => void
  errored?: boolean
}

const StyledInstruction = styled(Label, {
  color: '$gray11',
  unstyled: true,
  lineHeight: 20,
  fontSize: 12,
  fontWeight: '500',
})

const ErrorContent = styled(CustomText, {
  variant: 'caption1',
  errored: true,
})

function withFieldItem<T extends FieldItem>(Comp: React.ComponentType<T>) {
  const Wrapper = (props: T & WithFiledItemProps) => {
    const {
      label,
      instruction,
      required,
      error,
      name,
      labelStyle,
      layout = 'vertical',
      ...originalProps
    } = props
    const errored = Boolean(error)

    return (
      <YStack space="$0.5" flex={1}>
        <YStack space="$0.5">
          {label && (
            <CustomText variant={'body2'} color={'$color.gray11Light'}>
              {label}
            </CustomText>
          )}
          {instruction && <StyledInstruction>{instruction}</StyledInstruction>}
          <Comp errored={errored} {...(originalProps as T)} name={name} />
        </YStack>

        {error && <ErrorContent>{error}</ErrorContent>}
      </YStack>
    )
  }

  Wrapper.displayName = `withFieldItem(${Comp.displayName || Comp.name})`

  return Wrapper
}

export default withFieldItem
