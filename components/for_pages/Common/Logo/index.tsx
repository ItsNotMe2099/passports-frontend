import LogoSvg from '@/components/svg/LogoSvg'
import styles from './index.module.scss'

interface Props {
  color: string
}

export default function Logo(props: Props) {

  return (
    <div className={styles.root}>
      <LogoSvg />
      <div className={styles.title} style={{color: `${props.color}`}}>
        company
      </div>
    </div>
  )
}
