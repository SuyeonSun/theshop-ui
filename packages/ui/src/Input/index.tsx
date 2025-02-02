import classNames from 'classnames/bind'
import styles from './input.module.scss'
import type {Color} from '../types/colors'
import React from 'react'

const cx = classNames.bind(styles)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    variant?: 'filled' | 'outline'
    backgroundColor?: Color
    outlineColor?: Color
    full?: boolean
    disabled?: boolean
    value?: string
    clearable?: boolean
}

export function Input({
    placeholder = '',
    variant = 'filled',
    backgroundColor = 'adaptiveBlue500',
    outlineColor,
    full = false,
    onChange,
    value = '',
    clearable = false,
    ...restProps
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
                    'input',
                    `bg-color-${backgroundColor}`,
                    `${variant == 'outline' ? `outline-color-${outlineColor}` : null}`,
                    `${variant == 'outline' ? `outline` : null}`,
                    full && 'full',
                )}
                onChange={onChange}
                value={value}
                {...restProps}
            />
            {value && clearable && (
                <button className={styles.closeButton} onClick={clearInput}>
                    <span className={`material-symbols-outlined ${cx('material-symbols-outlined')}`}>close</span>
                </button>
            )}
        </div>
    )
}
