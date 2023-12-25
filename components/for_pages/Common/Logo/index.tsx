import LogoSvg from '@/components/svg/LogoSvg'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  color: string
  titleClass?: string
}

export default function Logo(props: Props) {

  return (
    <div className={styles.root}>
      <LogoSvg />
      <div className={classNames(styles.title, props.titleClass)} style={{color: `${props.color}`}}>
        company
      </div>
    </div>
  )
}
