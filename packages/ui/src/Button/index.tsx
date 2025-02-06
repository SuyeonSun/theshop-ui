import classNames from 'classnames/bind'
import styles from './button.module.scss'
import type {Color} from '../types/colors'
import React from 'react'

const cx = classNames.bind(styles)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    color?: Color
    backgroundColor?: Color
    size?: 'sm' | 'md' | 'lg'
    outlineColor?: Color
    full?: boolean
}

export function Button({
    children,
    color = 'adaptiveGrey50',
    backgroundColor = 'adaptiveBlue500',
    outlineColor = undefined,
    size = 'md',
    full = false,
    ...restProps
}: ButtonProps) {
    return (
        <button
            className={cx({
                button: true,
                [`color-${color}`]: color,
                [`bg-color-${backgroundColor}`]: backgroundColor,
                [`outline-color-${outlineColor}`]: outlineColor,
                [`${size}`]: true,
                full: full,
            })}
            {...restProps}
        >
            {children}
        </button>
    )
}
