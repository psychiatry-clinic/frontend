import appsAndPages from './apps-and-pages'
import charts from './charts'
import dashboard from './dashboard'
import patients from './patients'
import forms from './forms'
import others from './others'
import uiElements from './ui-elements'
import type { VerticalNavItems } from '@layouts/types'

export default [...dashboard, ...patients, ...appsAndPages, ...uiElements, ...forms, ...charts, ...others] as VerticalNavItems
