import classNames from 'classnames/bind'
import styles from './image.module.scss'

const cx = classNames.bind(styles)

const ratio = {
    '4:1': '25%',
    '5:3': '60%',
    '4:3': '75%',
    '1:1': '100%',
    '10:11': '110%',
}

export const sizeMap = {
    mini: ratio['4:1'],
    small: ratio['5:3'],
    medium: ratio['4:3'],
    large: ratio['1:1'],
    big: ratio['10:11'],
    original: undefined,
}

export interface ImageProps {
    src: string
    alt?: string
    size: keyof typeof sizeMap
}

export function Image({src, alt, size}: ImageProps) {
    return (
        <div className={cx({'img-container': true, [`${size}`]: true})}>
            <img
                src={src}
                alt={alt || 'img'}
                className={cx({
                    'img-with-ratio': size === 'original',
                    'img-without-ratio': size !== 'original',
                })}
            />
        </div>
    )
}
