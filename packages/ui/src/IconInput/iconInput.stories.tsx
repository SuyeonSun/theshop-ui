import {colors} from '../constants/colors'
import React from 'react'
import {IconInput, IconType} from '.'
import type {InputProps} from '../Input'
import {useState, useCallback} from 'react'

interface IconInputProps extends InputProps {
    icon: IconType
}

const meta = {
    title: 'base/IconInput',
    component: IconInput,
    argTypes: {
        backgroundColor: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '배경 색상',
        },
        outlineColor: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '테두리 색상',
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
        clearable: {
            control: {type: 'boolean'},
        },
        icon: {
            control: {type: 'select', options: ['search', 'cancel', 'close', 'block', 'check']},
        },
    },
}

export default meta

export const 아이콘_입력 = ({
    placeholder,
    backgroundColor,
    outlineColor,
    variant,
    full,
    disabled,
    clearable,
    icon,
}: IconInputProps) => {
    const [text, setText] = useState('')

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }, [])

    return (
        <div>
            <IconInput
                placeholder={placeholder}
                backgroundColor={backgroundColor}
                outlineColor={outlineColor}
                variant={variant}
                full={full}
                disabled={disabled}
                onChange={handleOnChange}
                value={text}
                clearable={clearable}
                icon={icon}
            />
        </div>
    )
}
