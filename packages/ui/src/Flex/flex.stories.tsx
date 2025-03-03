import {Flex} from '.'
import type {FlexProps} from '.'

const meta = {
    title: 'base/Flex',
    component: Flex,
    argTypes: {
        argTypes: {
            direction: {control: 'select', options: ['row', 'column']},
            justify: {control: 'select', options: ['start', 'center', 'end', 'between', 'around', 'evenly']},
            align: {control: 'select', options: ['start', 'center', 'end']},
            gap: {control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl']},
        },
    },
}

export default meta

export const 플렉스 = ({direction, justify, align, gap}: FlexProps) => {
    return (
        <div>
            <Flex direction={direction} justify={justify} align={align} gap={gap}>
                <div style={{background: '#e0e0e0', padding: '20px'}}>Item 1</div>
                <div style={{background: '#c0c0c0', padding: '20px'}}>Item 2</div>
                <div style={{background: '#a0a0a0', padding: '20px'}}>Item 3</div>
            </Flex>
        </div>
    )
}
