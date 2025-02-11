import classNames from 'classnames/bind'
import styles from './modal.module.scss'
import React from 'react'
import {Text} from '../Text'
import {Button} from '../Button'
import type {Color} from '../types/colors'

const cx = classNames.bind(styles)

interface DimmedProps {
    isShow: boolean
}

function Dimmed({isShow}: DimmedProps) {
    return <div className={cx({dimmed: isShow})} />
}

export interface ModalProps {
    header?: React.ReactNode
    contents?: React.ReactNode
    footer?: React.ReactNode
    isShow: boolean
    color?: Color
    backgroundColor?: Color
    outlineColor?: Color
}

export function Modal({header, contents, footer, isShow}: ModalProps) {
    if (!isShow) return null

    return (
        <div>
            <Dimmed isShow={isShow} />
            <div
                className={cx({
                    'modal-container': true,
                    open: isShow,
                })}
            >
                <div
                    className={cx({
                        'modal-header': header,
                    })}
                >
                    {header ? header : null}
                </div>
                <div
                    className={cx({
                        'modal-contents': contents,
                    })}
                >
                    {contents ? contents : null}
                </div>
                <div
                    className={cx({
                        'modal-footer': footer,
                    })}
                >
                    {footer ? footer : null}
                </div>
            </div>
        </div>
    )
}

interface HeaderProps {
    text: string
    onClose: () => void
}

function Header({text, onClose}: HeaderProps) {
    return (
        <div className={cx({'modal-header': true})}>
            <div className={cx({'close-btn': true})}>
                <button onClick={onClose}>
                    <span className={`material-symbols-outlined ${cx({'material-symbols-outlined': true})}`}>
                        close
                    </span>
                </button>
            </div>
            <div>
                <Text size="body1" bold={true}>
                    {text}
                </Text>
            </div>
        </div>
    )
}

interface ButtonProps {
    leftButton?: {
        label: string
        action: () => void
        color?: Color
        backgroundColor?: Color
        outlineColor?: Color
    }
    rightButton?: {
        label: string
        action: () => void
        color?: Color
        backgroundColor?: Color
        outlineColor?: Color
    }
}

function Buttons({leftButton, rightButton}: ButtonProps) {
    return (
        <div className={cx({'modal-buttons': true})}>
            {leftButton && (
                <Button
                    onClick={leftButton.action}
                    full={true}
                    color={leftButton.color}
                    backgroundColor={leftButton.backgroundColor}
                    outlineColor={leftButton.outlineColor}
                >
                    {leftButton.label}
                </Button>
            )}
            {rightButton && (
                <Button
                    onClick={rightButton.action}
                    full={true}
                    color={rightButton.color}
                    backgroundColor={rightButton.backgroundColor}
                    outlineColor={rightButton.outlineColor}
                >
                    {rightButton.label}
                </Button>
            )}
        </div>
    )
}

interface LinkProps {
    label: string
    action: () => void
    color?: Color
}

function Link({label, action, color}: LinkProps) {
    return (
        <div className={cx({'modal-link': true})} onClick={action}>
            <Text bold={true} color={color} size="body3">
                {label}
            </Text>
        </div>
    )
}

Modal.Header = Header
Modal.Buttons = Buttons
Modal.Link = Link
