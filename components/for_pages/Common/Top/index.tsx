import Button from '@/components/ui/Button'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { Routes } from '@/types/routes'
import ShieldSvg from '@/components/svg/ShieldSvg'
import { colors } from '@/styles/variables'
import TimeCircleSvg from '@/components/svg/TimeCircleSvg'
import WalletSvg from '@/components/svg/WalletSvg'
import Item from './Item'

interface Props {

}

export default function Top(props: Props) {

  const router = useRouter()

  const items = [
    { icon: <ShieldSvg color={colors.white} />, text: 'Гарантировано и без скрытых платежей' },
    { icon: <TimeCircleSvg color={colors.white} />, text: 'Всего за 2 года без неподъемных инвестиций' },
    { icon: <WalletSvg color={colors.white} />, text: 'Сэкономив до 500% с компанией Brix Law' },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Стань гражданином Евросоюза
        </div>
        <Button
          className={styles.btn}
          font={'white-font'}
          color={router.asPath === Routes.bulgaria ? 'green' : 'blue'}>
          Бесплатная консультация
        </Button>
        <div className={styles.items}>
          {items.map((i, index) =>
            <Item icon={i.icon} text={i.text} key={index} />
          )}
        </div>
      </div>
    </div>
  )
}
