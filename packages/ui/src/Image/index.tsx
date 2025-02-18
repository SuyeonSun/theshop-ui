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
        <div style={{position: 'relative', paddingBottom: size === 'original' ? 'auto' : sizeMap[size]}}>
            <img src={src} alt={alt || 'img'} style={{width: '100%', height: '100%', position: 'absolute'}} />
        </div>
    )
}
