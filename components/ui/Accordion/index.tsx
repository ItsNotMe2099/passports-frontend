import styles from './index.module.scss'
import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import MinusSvg from '@/components/svg/MinusSvg'
import PlusSvg from '@/components/svg/PlusSvg'
import { Routes } from '@/types/routes'
import { useRouter } from 'next/router'
import { colors } from '@/styles/variables'

interface Props {
  title: string
  content: any
}

export default function Accordion(props: Props) {

  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")

  const content = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(setActive === "active" ? "0px" : `${content.current?.scrollHeight}px`)
  }

  return (
    <div className={styles.accordion__section}>
      <a className={classNames(styles.accordion, { [styles.active]: setActive })} onClick={toggleAccordion}>
        <div className={styles.accordion__title}>{props.title}</div>
        <div className={styles.icon}>
          {setActive ? <MinusSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} /> :
            <PlusSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />}
        </div>
      </a>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.accordion__content}>
        <div className={styles.accordion__text}>{props.content}</div>
      </div>
    </div>
  )
}
