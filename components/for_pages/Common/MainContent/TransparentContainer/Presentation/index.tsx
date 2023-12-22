import { useRouter } from 'next/router'
import styles from './index.module.scss'
import classNames from 'classnames'
import { Routes } from '@/types/routes'
import Button from '@/components/ui/Button'

interface Props {

}

export default function Presentation(props: Props) {

  const router = useRouter()

  const getBtnFontColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return 'blue-font'
    }
    else {
      return 'green-font'
    }
  }

  return (
    <div className={classNames(styles.root, { [styles.bulgaria]: router.asPath === Routes.bulgaria })}>
      <div className={styles.left}>
        Презентация с полным описанием
      </div>
      <Button
        font={getBtnFontColor()}
        color={'white'}>
        Смотреть онлайн
      </Button>
    </div>
  )
}
