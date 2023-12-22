import TransparentContainer from './TransparentContainer'
import WhiteContainer from './WhiteContainer'
import styles from './index.module.scss'
import Reasons from './TransparentContainer/Reasons'
import OpenDoors from './TransparentContainer/OpenDoors'
import Why from './TransparentContainer/Why'
import Price from './WhiteContainer/Price'
import Presentation from './TransparentContainer/Presentation'
import Instruction from './TransparentContainer/Instruction'
import Subscribe from './TransparentContainer/Subscribe'
import Free from './WhiteContainer/Free'
import Oath from './WhiteContainer/Oath'
import FAQ from './TransparentContainer/FAQ'

interface Props {

}

export default function MainContent(props: Props) {

  return (
    <div className={styles.root}>
      <TransparentContainer>
        <Reasons />
        <OpenDoors />
        <Why />
      </TransparentContainer>
      <WhiteContainer>
        <Price />
      </WhiteContainer>
      <TransparentContainer>
        <Presentation />
        <Instruction />
        <Subscribe />
      </TransparentContainer>
      <WhiteContainer>
        <Free />
        <Oath />
      </WhiteContainer>
      <TransparentContainer>
        <FAQ />
      </TransparentContainer>
    </div>
  )
}
