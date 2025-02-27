import classNames from 'classnames/bind'
import styles from './flex.module.scss'

const cx = classNames.bind(styles)

export interface FlexProps {
    children: React.ReactNode
    direction?: 'row' | 'column'
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    align?: 'start' | 'center' | 'end'
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Flex({children, direction = 'row', justify = 'center', align = 'center', gap = 'sm'}: FlexProps) {
    return (
        <div
            className={cx({
                flex: true,
                [`direction-${direction}`]: true,
                [`justify-${justify}`]: true,
                [`align-${align}`]: true,
                [`gap-${gap}`]: true,
            })}
        >
            {children}
        </div>
    )
}
