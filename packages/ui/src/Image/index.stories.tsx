import {Image, sizeMap, ImageProps} from '.'

const meta = {
    title: 'base/image',
    component: Image,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: Object.keys(sizeMap),
            },
            description: '이미지 비율',
        },
        lazy: {
            control: {type: 'boolean'},
            description: '지연 로딩 여부',
        },
    },
}

export default meta

export const 이미지 = ({size, lazy}: ImageProps) => {
    return (
        <div>
            <Image src="https://picsum.photos/200/300" size={size} lazy={lazy} />
        </div>
    )
}
