import {colors} from '../constants/colors'
import {Text} from '.'
import type {TextProps} from '.'

const meta = {
    title: 'base/Text',
    component: Text,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '텍스트 색상',
        },
        size: {
            control: {
                type: 'select',
                options: ['title1', 'title2', 'title3', 'title4', 'body1', 'body2', 'body3', 'body4'],
            },
        },
        bold: {
            control: {type: 'boolean'},
        },
    },
}

export default meta

export const 텍스트 = ({color, size, bold}: TextProps) => {
    return (
        <Text color={color} size={size} bold={bold}>
            텍스트 테스트
        </Text>
    )
}
