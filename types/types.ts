import { SnackbarType } from './enums'
import { MouseEventHandler } from 'react'
import { UrlObject } from 'url'

export type FieldIconName = 'field_phone' | 'field_name' | 'field_comment' | 'field_date' | 'field_time' | 'field_persons' | 'field_email'

export interface IButton {
  type?: 'submit' | 'reset' | 'button' | undefined
  form?: string
  spinner?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler | null
  href?: string | UrlObject | null
  isExternalHref?: boolean // add target blank and no referrer
}

export type Nullable<T> = T | null

export interface IOptionGroup<T> {
  title?: string
  options: IOption<T>[]
}
export interface IOption<T> {
  label?: string
  value?: T
  disabled?: boolean
  description?: string
  name?: string
  badge?: number
  href?: string
  color?: string
}

export type RadioStyleType = 'default' | 'tile' | 'row'

export class RequestError extends Error {
  message: string
  code: number
  isNotFoundError: boolean

  constructor(message: string, code: number) {
    super(message)
    this.message = message
    this.code = code
    this.isNotFoundError = code === 404
  }
}

export interface SnackbarData {
  text: string
  type: SnackbarType
}

export const CONTACTS = {
  telegram: '#',
  whatsapp: '#',
  address: '105066, г. Москва, ул. Бауманская, д. 16, оф. 409Б',
  romaniaEmbassy: 'http://moscova.mae.ro/ru',
  ministryRomania: 'https://cetatenie.just.ro/',
  consulatRomania: 'https://www.econsulat.ro/',
  bulgariaEmbassy: '#',
  ministryBulgaria: '#',
  consulatBulgaria: '#',
  sloveniaEmbassy: '#',
  ministrySlovenia: '#',
  consulatSlovenia: '#',
}

export interface IRichTextLinkData {
  title: string | null,
  href: string | null
}


export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}