import { ReactElement } from 'react'
import Header from 'components/layout/Header'
import styles from './index.module.scss'
import Footer from 'components/layout/Footer'
import { Sticky, StickyContainer } from 'react-sticky'
interface Props {
  children?: ReactElement | ReactElement[]
}

export default function Layout(props: Props) {

  return (
    <div className={styles.root}>
      <StickyContainer>
        <Sticky>
          {({ style, distanceFromTop }) => <div className={styles.headerWrapper} style={style}>
            <Header distanceFromTop={distanceFromTop} />
          </div>}
        </Sticky>
        <div className={styles.container}>
          {props.children}
        </div>
        <Footer />
      </StickyContainer>
    </div>
  )
}
