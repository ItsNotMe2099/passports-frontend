import { useRef, useState } from 'react'
import { useDetectOutsideClick } from 'components/hooks/useDetectOutsideClick'
import styles from './index.module.scss'
import classNames from 'classnames'
import ChevronDownSvg from '@/components/svg/ChevronDownSvg'
import { colors } from '@/styles/variables'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IOption {
  icon: string
  label: string
  link: string
  value: string
}


interface Props {
  options: IOption[]
  activeTab?: string
  allOption?: boolean
  dots?: boolean
  className?: string
  optionClick?: (option: IOption) => void
  color?: string
}

export default function DropdownMenu(props: Props) {
  const dropdownRef = useRef(null)
  const router = useRouter()
  const { options, optionClick } = props
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)

  const current = options.find(i => i.link === router.asPath)

  const [currentOption, setCurrentOption] = useState<IOption>(current as IOption)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIsActive(!isActive)
  }

  console.log(isActive)

  const handleOptionClick = (item: IOption) => {
    setCurrentOption(item)
    setIsActive(false)
    optionClick ? optionClick(item) : null
  }

  const filtered = options.filter(i => i.label !== currentOption.label)

  return (
    <div className={classNames(styles.root, props.className)}>
      <a href="#" onClick={handleClick} className={classNames(styles.dropDownTrigger)}>
        <Image className={styles.icon} src={currentOption.icon} alt='' width={24} height={24} />
        <div className={styles.label}>
          <span style={{ color: `${props.color}` }}>{currentOption.label}</span>
        </div>
        <div className={styles.arrow}>
          <ChevronDownSvg color={props.color} />
        </div>
      </a>
      <nav ref={dropdownRef} className={classNames(styles.dropDown, { [styles.dropDownActive]: isActive })}>
        {filtered.map((item, index) => <div key={index}
          className={classNames(styles.option, { [styles.optionCurrent]: item.label === currentOption.label })}
          onClick={() => handleOptionClick(item)}>
          <Link href={item.link}>{item.label}</Link></div>)}
      </nav>
    </div>
  )
}
