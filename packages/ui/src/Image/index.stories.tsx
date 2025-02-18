import {Image, sizeMap} from '.'

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
    },
}

export default meta

export const 이미지 = ({size}: any) => {
    return (
        <div>
            <Image src="https://picsum.photos/200/300" size={size} />
        </div>
    )
}
