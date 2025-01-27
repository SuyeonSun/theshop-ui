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
    },
}

export default meta

export const 버튼 = ({color, backgroundColor}: ButtonProps) => {
    return (
        <div>
            <Button color={color} backgroundColor={backgroundColor} />
        </div>
    )
}
