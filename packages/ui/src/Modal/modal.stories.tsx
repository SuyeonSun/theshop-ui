import {Modal, ModalProps} from '.'
import {useState} from 'react'
import {colors} from '../constants/colors'
import {Text} from '../Text'

const meta = {
    title: 'base/modal',
    component: Modal,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '버튼 텍스트 색상',
        },
        backgroundColor: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '버튼 색상',
        },
        outlineColor: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '테투리 색상',
        },
    },
}

export default meta

export const 모달 = ({color, backgroundColor, outlineColor}: ModalProps) => {
    const [isShow, setIsShow] = useState(false)
    const handleModal = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <button onClick={handleModal}>모달 열기</button>
            <Modal
                isShow={isShow}
                header={<Modal.Header text="Face ID를 등록해주세요" onClose={handleModal} />}
                contents={
                    <div>
                        <Text size="body2">기기에 Face ID가 설정되어야 사용할 수 있어요.</Text>
                    </div>
                }
                footer={
                    <Modal.Buttons
                        leftButton={{
                            label: '확인',
                            action: () => console.log('왼쪽 버튼 클릭'),
                            color: color,
                            backgroundColor: backgroundColor,
                            outlineColor: outlineColor,
                        }}
                        rightButton={{
                            label: '설정으로 이동',
                            action: () => console.log('오른쪽 버튼 클릭'),
                            color: color,
                            backgroundColor: backgroundColor,
                            outlineColor: outlineColor,
                        }}
                    />
                }
            />
        </div>
    )
}
