import classNames from 'classnames/bind'
import styles from './input.module.scss'
import type {Color} from '../types/colors'
import React from 'react'

const cx = classNames.bind(styles)

interface InputProps {
    placeholder?: undefined | string
    variant?: 'filled' | 'outline'
    backgroundColor?: Color
    outlineColor?: Color
    full?: boolean
    disabled?: boolean
    value?: undefined | string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
    placeholder = undefined,
    variant = 'filled',
    backgroundColor = 'adaptiveBlue500',
    outlineColor = undefined,
    full = false,
    disabled = false,
    onChange,
    value = undefined,
}: InputProps) {
    const clearInput = () => {
        if (onChange) {
            const event = {target: {value: ''}} as React.ChangeEvent<HTMLInputElement>
            onChange(event)
        }
    }

    return (
        <div>
            <input
                placeholder={placeholder}
                className={cx(
                    styles.input,
                    `bg-color-${backgroundColor}`,
                    `${variant == 'outline' ? `outline-color-${outlineColor}` : null}`,
                    `${variant == 'outline' ? `outline` : null}`,
                    full ? styles.full : null,
                )}
                disabled={disabled}
                onChange={onChange}
                value={value}
            />
            {value && !disabled && <button onClick={clearInput}>x</button>}
        </div>
    )
}
