import classNames from 'classnames/bind'
import styles from './text.module.scss'
import type {Color} from '../types/colors'

const cx = classNames.bind(styles)

export interface TextProps {
    children?: React.ReactNode
    color?: Color
    size?: 'title1' | 'title2' | 'title3' | 'title4' | 'body1' | 'body2' | 'body3' | 'body4'
    bold?: boolean
}
export function Text({children, color = 'adaptiveGrey900', size = 'body1', bold = false}: TextProps = {}) {
    return (
        <p
            className={cx({
                [`color-${color}`]: color,
                [`${size}`]: true,
                bold: bold,
            })}
        >
            {children}
        </p>
    )
}
