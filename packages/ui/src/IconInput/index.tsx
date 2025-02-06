import classNames from 'classnames/bind'
import styles from './iconInput.module.scss'
import React from 'react'
import {Input, InputProps} from '../Input'

const cx = classNames.bind(styles)

export type IconType = 'search' | 'cancel' | 'close' | 'block' | 'check'

export interface IconInputProps extends InputProps {
    icon: IconType
}

export function IconInput({icon, full, ...restProps}: IconInputProps) {
    return (
        <div className={cx('icon-input-container', {full: full})}>
            <div className={cx('icon-input-wrapper', {full: full})}>
                <Input {...restProps} full={full} isWithIcon={true} />

                {icon ? (
                    <span className={cx('icon')}>
                        <span className={`material-symbols-outlined ${cx('material-symbols-outlined')}`}>{icon}</span>
                    </span>
                ) : null}
            </div>
        </div>
    )
}
