import classNames from 'classnames/bind'
import styles from './iconInput.module.scss'
import {Input, InputProps} from '../Input'

const cx = classNames.bind(styles)

export type IconType = 'search' | 'cancel' | 'close' | 'block' | 'check'

export interface IconInputProps extends InputProps {
    icon: IconType
}

export function IconInput({icon, full, ...restProps}: IconInputProps) {
    return (
        <div
            className={cx({
                'icon-input-container': true,
                full: full,
            })}
        >
            <div className={cx({'icon-input-wrapper': true, full: full})}>
                <Input {...restProps} full={full} isWithIcon={true} />

                {icon ? (
                    <span className={cx({icon: true})}>
                        <span className={`material-symbols-outlined ${cx({'material-symbols-outlined': true})}`}>
                            {icon}
                        </span>
                    </span>
                ) : null}
            </div>
        </div>
    )
}
