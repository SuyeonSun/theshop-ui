import classNames from 'classnames/bind'
import styles from './button.module.scss'
import type {Color} from '../types/colors'

const cx = classNames.bind(styles)

interface ButtonProps {
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
}: ButtonProps = {}) {
    return (
        <button
            className={cx(
                styles.button,
                `color-${color}`,
                `bg-color-${backgroundColor}`,
                `outline-color-${outlineColor}`,
                styles[size],
                full ? styles.full : null,
            )}
        >
            {children}
        </button>
    )
}
