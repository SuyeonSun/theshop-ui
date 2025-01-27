import classNames from 'classnames/bind'

import styles from './button.module.scss'

import type {Color} from '../types/colors'

const cx = classNames.bind(styles)

interface ButtonProps {
    children?: React.ReactNode
    color?: Color
    backgroundColor?: Color
    size?: 'small' | 'medium' | 'large'
    outlineColor?: Color
}

export function Button({
    children,
    color = 'adaptiveGrey50',
    backgroundColor = 'adaptiveBlue500',
    outlineColor = undefined,
    size = 'small',
}: ButtonProps = {}) {
    return (
        <button
            className={cx(
                styles.button,
                `color-${color}`,
                `bg-color-${backgroundColor}`,
                `outline-color-${outlineColor}`,
                styles[size],
            )}
        >
            {children}
        </button>
    )
}
