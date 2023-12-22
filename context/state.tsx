import { SnackbarType } from '@/types/enums'
import { SnackbarData } from '@/types/types'
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { getIsMobile } from '@/utils/mobile'

interface IState {
  isMobile: boolean
  isDesktop: boolean
  snackbar: SnackbarData | null
  showSnackbar: (text: string, type: SnackbarType) => void
  headerDirection: 'up' | 'down'
  setDirection: Dispatch<SetStateAction<'up' | 'down'>>
}

const defaultValue: IState = {
  isMobile: false,
  isDesktop: true,
  snackbar: null,
  showSnackbar: (text, type) => null,
  headerDirection: 'up',
  setDirection: () => null,
}

const AppContext = createContext<IState>(defaultValue)

interface Props {
  children: React.ReactNode
  isMobile: boolean
}

export function AppWrapper(props: Props) {
  const [snackbar, setSnackbar] = useState<SnackbarData | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(props.isMobile)
  const [headerDirection, setDirection] = useState<'up'|'down'>('up')

  const showSnackbar = (text: string, type: SnackbarType) => {

    setSnackbar({ text, type })
    setTimeout(() => {
      setSnackbar(null)
    }, 2000)
  }

  useEffect(() => {
    setIsMobile(getIsMobile(props.isMobile))
  }, [])

  const value: IState = {
    ...defaultValue,
    isMobile: isMobile,
    isDesktop: !props.isMobile,
    snackbar,
    showSnackbar,
    headerDirection,
    setDirection,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
