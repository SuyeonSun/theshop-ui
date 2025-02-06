import classNames from 'classnames/bind'
import styles from './input.module.scss'
import type {Color} from '../types/colors'
import React, {useCallback} from 'react'

const cx = classNames.bind(styles)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    variant?: 'filled' | 'outline'
    backgroundColor?: Color
    outlineColor?: Color
    full?: boolean
    disabled?: boolean
    value?: string
    clearable?: boolean
    isWithIcon?: boolean
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
    isWithIcon = false,
    ...restProps
}: InputProps) {
    const clearInput = useCallback(() => {
        if (onChange) {
            const event = {target: {value: ''}} as React.ChangeEvent<HTMLInputElement>
            onChange(event)
        }
    }, [onChange])

    return (
        <div className={cx({'input-container': true, full: full})}>
            <div className={cx('input-wrapper')}>
                <input
                    placeholder={placeholder}
                    className={cx({
                        input: true,
                        [`bg-color-${backgroundColor}`]: backgroundColor,
                        [`outline-color-${outlineColor}`]: variant === 'outline',
                        outline: variant === 'outline',
                    })}
                    onChange={onChange}
                    value={value}
                    {...restProps}
                />
                {value && clearable ? (
                    <button
                        className={cx({
                            'clearable-btn-with-icon': isWithIcon,
                            'clearable-btn-without-icon': !isWithIcon,
                        })}
                        onClick={clearInput}
                    >
                        <span className={`material-symbols-outlined ${cx({'material-symbols-outlined': true})}`}>
                            close
                        </span>
                    </button>
                ) : null}
            </div>
        </div>
    )
}
