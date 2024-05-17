import { getI18n } from '@/plugins/i18n/index'
import { messages } from './../plugins/i18n/index'
import { differenceInMonths, differenceInYears, isValid } from 'date-fns'
import { createI18n } from 'vue-i18n'
import { cookieRef } from '@layouts/stores/config'
import { themeConfig } from '@themeConfig'

let i18n: any = null

i18n = getI18n()
const t = i18n.global.t

export const calculateAge = (
  dob: string,
  justYears: boolean = false
): string | number => {
  const dobDate = new Date(dob)
  if (!isValid(dobDate)) {
    return 'Invalid Date of Birth'
  }

  const currentDate = new Date()
  const years = differenceInYears(currentDate, dobDate)
  const months = differenceInMonths(currentDate, dobDate) % 12

  if (years > 0 && !justYears) {
    if (months > 0 && !justYears) {
      return `${years} ${t('years')} ${t('&')} ${months} ${t('months')}`
    } else {
      return `${years}` + t('years') // Use translated 'years'
    }
  } else if (months > 0 && !justYears) {
    return `${months} ` + t('months') // Use translated 'months'
  } else if (justYears) {
    return years
  } else {
    return t('lessThanAMonth') // Use translated 'lessThanAMonth'
  }
}

export const formatSiblingOrder = (order: number | string): string => {
  const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']
  const index = +order % 100
  return order + (suffixes[(index - 20) % 10] || suffixes[index] || suffixes[0])
}

export const getVisitNumber = (visits: any, index: number): string => {
  const totalVisits = visits.length
  const visitNumber = totalVisits - index
  return `${visitNumber}${getOrdinalSuffix(visitNumber)}`
}

// Function to get the ordinal suffix for a number
function getOrdinalSuffix(number: number): string {
  if (number === 11 || number === 12 || number === 13) {
    return 'th'
  }

  const lastDigit = number % 10

  switch (lastDigit) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export const addTimeToDateString = (dateString: string): string => {
  console.log('dateString')
  console.log(dateString)

  return `${dateString}T00:00:00.000Z`
}

export const removeTimeFromDate = (dateTimeString: string | null): string => {
  if (!dateTimeString) return ''
  return dateTimeString.split('T')[0]
}

export const removeTimeAndDate = (dateTimeString: string | null): string => {
  if (!dateTimeString) return ''
  return dateTimeString.split('-')[0]
}
