import type { VerticalNavItems } from '@layouts/types'
import patients from './patients'
import Settings from './settings'

export default [...patients, ...Settings] as VerticalNavItems
