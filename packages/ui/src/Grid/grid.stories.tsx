import {Grid} from '.'
import type {GridProps} from '.'

const meta = {
    title: 'base/Grid',
    component: Grid,
    argTypes: {
        columns: {control: {type: 'number'}},
        gap: {control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl']},
    },
}

export default meta

export const 그리드 = ({columns, gap}: GridProps) => {
    return (
        <Grid columns={columns} gap={gap}>
            <div style={{background: '#e0e0e0', padding: '20px'}}>Item 1</div>
            <div style={{background: '#c0c0c0', padding: '20px'}}>Item 2</div>
            <div style={{background: '#a0a0a0', padding: '20px'}}>Item 3</div>
            <div style={{background: '#e0e0e0', padding: '20px'}}>Item 4</div>
            <div style={{background: '#c0c0c0', padding: '20px'}}>Item 5</div>
            <div style={{background: '#a0a0a0', padding: '20px'}}>Item 6</div>
            <div style={{background: '#e0e0e0', padding: '20px'}}>Item 7</div>
            <div style={{background: '#c0c0c0', padding: '20px'}}>Item 8</div>
            <div style={{background: '#a0a0a0', padding: '20px'}}>Item 9</div>
        </Grid>
    )
}
