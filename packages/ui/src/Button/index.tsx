import classNames from 'classnames/bind'

import styles from './button.module.scss'

import type {Color} from '../types/colors'

const cx = classNames.bind(styles)

interface ButtonProps {
    color?: Color
    backgroundColor?: Color
}

export function Button({color = 'adaptiveGrey50', backgroundColor = 'adaptiveBlue500'}: ButtonProps = {}) {
    return <button className={cx('article', `color-${color}`, `bg-color-${backgroundColor}`)}>button</button>
}
