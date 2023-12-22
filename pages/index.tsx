import { useRouter } from 'next/router'
import { useEffect } from 'react'
import cookie from 'js-cookie'


export default function IndexPage() {

  const router = useRouter()



  useEffect(() => {
    const country = cookie.get('country')
    if (country) {
      router.push(`/${country}`)
    }
    else {
      cookie.set('country', 'romania', { expires: 365 * 3 })
      router.push('/romania')
    }
  }, [])

  return (
    <></>
  )
}
