import {colors} from '../constants/colors'
import {Button} from '.'
import type {ButtonProps} from '.'

const meta = {
    title: 'base/Button',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '버튼 텍스트 색상',
        },
        backgroundColor: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '버튼 색상',
        },
        outlineColor: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '테투리 색상',
        },
        size: {
            control: {type: 'select', options: ['sm', 'md', 'lg']},
        },
        full: {
            control: {type: 'boolean'},
        },
    },
}

export default meta

export const 버튼 = ({color, backgroundColor, outlineColor, size, full}: ButtonProps) => {
    return (
        <div>
            <Button color={color} backgroundColor={backgroundColor} outlineColor={outlineColor} size={size} full={full}>
                버튼
            </Button>
        </div>
    )
}
