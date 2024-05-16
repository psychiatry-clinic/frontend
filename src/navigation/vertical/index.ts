import type { VerticalNavItems } from '@layouts/types'
import appsAndPages from './apps-and-pages'
import charts from './charts'
import forms from './forms'
import others from './others'
import patients from './patients'
import uiElements from './ui-elements'
import Settings from './settings'

export default [
  ...patients,
  ...Settings,
  ...forms,
  ...charts,
  ...appsAndPages,
  ...uiElements,
  ...others,
] as VerticalNavItems
