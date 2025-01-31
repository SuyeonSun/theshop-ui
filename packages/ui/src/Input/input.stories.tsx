import {colors} from '../constants/colors'
import {Input} from '.'
import type {InputPros} from '.'

const meta = {
    title: 'base/Input',
    component: Input,
    argTypes: {
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
        variant: {
            control: {type: 'select', options: ['filled', 'outline']},
        },
        placeholder: {
            control: {type: 'text'},
        },
        full: {
            control: {type: 'boolean'},
        },
        disabled: {
            control: {type: 'boolean'},
        },
    },
}

export default meta

export const 입력 = ({placeholder, backgroundColor, outlineColor, variant, full, disabled}: InputPros) => {
    return (
        <div>
            <Input
                placeholder={placeholder}
                backgroundColor={backgroundColor}
                outlineColor={outlineColor}
                variant={variant}
                full={full}
                disabled={disabled}
                onChange={(e) => console.log(e.target.value)}
            />
        </div>
    )
}
