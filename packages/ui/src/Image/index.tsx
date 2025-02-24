import classNames from 'classnames/bind'
import styles from './image.module.scss'
import {useInView} from 'react-intersection-observer'

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
    lazy: boolean
}

export function Image({src, alt, size, lazy}: ImageProps) {
    if (lazy === true) {
        return <LazyImage src={src} alt={alt} size={size} />
    } else {
        return <BaseImage src={src} alt={alt} size={size} />
    }
}

interface BaseImageProps {
    src: string
    alt?: string
    size: keyof typeof sizeMap
}

function BaseImage({src, alt, size}: BaseImageProps) {
    const isOriginal = size === 'original'

    return (
        <div className={cx({'img-container': true, [`${size}`]: true, original: isOriginal})}>
            <img src={src} alt={alt || 'img'} />
        </div>
    )
}

interface LazyImageProps {
    src: string
    alt?: string
    size: keyof typeof sizeMap
}

function LazyImage({src, alt, size}: LazyImageProps) {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0})
    const isOriginal = size === 'original'

    return (
        <div ref={ref} className={cx({'img-container': true, [`${size}`]: true, original: isOriginal})}>
            <img src={inView ? src : undefined} alt={alt || 'img'} />
        </div>
    )
}
