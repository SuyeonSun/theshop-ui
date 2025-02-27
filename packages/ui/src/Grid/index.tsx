import classNames from 'classnames/bind'
import styles from './grid.module.scss'

const cx = classNames.bind(styles)

export interface GridProps {
    children: React.ReactNode
    columns?: number
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Grid({children, columns, gap}: GridProps) {
    return <div className={cx({grid: true, [`gap-${gap}`]: true, [`columns-${columns}`]: true})}>{children}</div>
}
