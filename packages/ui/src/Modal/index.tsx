import classNames from 'classnames/bind'
import styles from './modal.module.scss'
import React from 'react'
import {Text} from '../Text'
import {Button} from '../Button'
import type {Color} from '../types/colors'
import ReactDOM from 'react-dom'
import {motion, AnimatePresence} from 'framer-motion'

const cx = classNames.bind(styles)

interface DimmedProps {
    isShow: boolean
}

function Dimmed({isShow}: DimmedProps) {
    return <div className={cx({dimmed: isShow})} />
}

export interface ModalProps {
    isShow: boolean
    children: React.ReactNode
}

export function Modal({isShow, children}: ModalProps) {
    return ReactDOM.createPortal(
        <div>
            <AnimatePresence>
                {isShow ? (
                    <div>
                        <Dimmed isShow={isShow} />
                        <motion.div
                            className={cx('modal-container')}
                            initial={{opacity: 0, x: '-50%', y: '100%'}}
                            animate={{opacity: 1, x: '-50%', y: '0%'}}
                            exit={{opacity: 0, x: '-50%', y: '100%'}}
                            transition={{duration: 0.3, ease: 'easeOut'}}
                        >
                            {children}
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
        </div>,

        document.body,
    )
}

interface HeaderProps {
    text?: string
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

interface ContentProps {
    children: React.ReactNode
}

export function ModalContent({children}: ContentProps) {
    return <div className={cx('modal-contents')}>{children}</div>
}

interface FooterProps {
    children: React.ReactNode
}

export function ModalFooter({children}: FooterProps) {
    return <div className={cx('modal-footer')}>{children}</div>
}

interface ButtonProps {
    leftButton?: {
        label: string
        onClick: () => void
        color?: Color
        backgroundColor?: Color
        outlineColor?: Color
    }
    rightButton?: {
        label: string
        onClick: () => void
        color?: Color
        backgroundColor?: Color
        outlineColor?: Color
    }
}

function Buttons({leftButton, rightButton}: ButtonProps) {
    return (
        <div className={cx({'modal-buttons': true})}>
            {leftButton ? (
                <Button
                    onClick={leftButton.onClick}
                    full={true}
                    color={leftButton.color}
                    backgroundColor={leftButton.backgroundColor}
                    outlineColor={leftButton.outlineColor}
                >
                    {leftButton.label}
                </Button>
            ) : null}
            {rightButton ? (
                <Button
                    onClick={rightButton.onClick}
                    full={true}
                    color={rightButton.color}
                    backgroundColor={rightButton.backgroundColor}
                    outlineColor={rightButton.outlineColor}
                >
                    {rightButton.label}
                </Button>
            ) : null}
        </div>
    )
}

interface LinkProps {
    label: string
    onClick: () => void
    color?: Color
}

function Link({label, onClick, color}: LinkProps) {
    return (
        <div className={cx({'modal-link': true})} onClick={onClick}>
            <Text bold={true} color={color} size="body3">
                {label}
            </Text>
        </div>
    )
}

Modal.Header = Header
Modal.Content = ModalContent
Modal.Footer = ModalFooter
Modal.Buttons = Buttons
Modal.Link = Link
