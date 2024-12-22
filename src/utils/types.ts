export interface Patient {
  id: number
  name: string
  dob: string
  age: string
  gender: string
  avatar: string
  father_edu: string
  mother_edu: string
  phone: null | string
  father_dob: null | string
  mother_dob: null | string
  father_age: null | string
  mother_age: null | string
  father_work: null | string
  mother_work: null | string
  siblings: null | number
  order: null | number
  related: boolean
  notes: null | string
  family_hx?: FamilyHX
  past_hx?: PastHX
  occupation_hx?: OccupationHX
  forensic_hx?: ForensicHX
  social_hx?: SocialHX
  development?: Development
  personal_hx?: PersonalHX
  visits?: Visit[]
  demographics?: Demographics[] // Assuming demographics data structure is unknown
  prescriptions?: Prescription[]
  tests?: Test[]
  createdAt: string
  updatedAt: string
}

export interface User {
  id: number
  username: string
  password: string
  role: string
  clinic: Clinic
}

interface Clinic {
  name: string
  id: number
}

export interface Prescription {
  id: number
  patientId: number
  doctorId: number
  dosage: string
  instructions: string
  createdAt: string
  updatedAt: string
}

export interface Test {
  id: number
  name: string
  type: string
  range: string
  value: string
  patientId: number
  visitId: number
  createdAt: string
  updatedAt: string
}

export interface Demographics {
  id: number
  patient?: Patient // Assuming Patient interface is defined elsewhere
  patientId?: number
  marital_status?: string | null
  occupation?: string | null
  children?: string | null
  residence?: string | null
  neighborhood?: string | null
  education?: string | null
  createdAt: string
  updatedAt: string
}

export interface Visit {
  id: number
  patient: Patient
  patientId: number
  doctor?: Doctor
  doctorId?: number
  active: boolean
  clinic: Clinic
  follow_up: boolean
  duration?: number
  chief_complaint?: Chief_complaint
  present_illness?: Present_illness
  suicide?: string
  examination?: Examination
  ddx?: DDX
  management?: { managements: ManagementItem[] }
  ix?: Ix
  therapyRequest?: boolean
  consultations?: Consultations
  prescription?: Prescription
  prescriptionId?: number
  tests: Test[]
  therapyId?: number
  therapy?: Therapy
  notes?: notes
  insight?: string
  createdAt: string
  updatedAt: string
}

interface notes {
  Notes: string
  Compliance: string
  'Mental State': string
  'Current Symptoms': string
}

interface ManagementItem {
  Dose: string
  Form: string
  Name: string
  Use: string
}

interface differ {
  differential: string
}

export interface Doctor {
  id: number
  username: string
  fullName: string
  phone: string
  avatar?: string
  visits?: Visit[]
  user: User[]
  prescriptions: Prescription[]
  patients: Patient[]
  createdAt: string
  updatedAt: string
}

export interface Therapy {
  id: number
  notes: string
  clinic: Clinic
  psychologist?: Psychologist
  psychologistId?: number
  visits?: Visit[]
  createdAt: string
  updatedAt: string
}

export interface Psychologist {
  id: number
  name: string
  phone: string
  user: User[]
  therapies: Therapy[]
  createdAt: string
  updatedAt: string
}

export interface Chief_complaint {
  Complaint?: string
  Duration?: string
  Referral?: string
  Source?: string
}

export interface Present_illness {
  Course?: string
  Circumstances?: string
  Vegetative?: string
  Associated?: string
  ASD?: string
  ADHD?: string
  Speech?: string
  ID?: string
  Language?: string
  Fluency?: string
  Communication?: string
  Learning?: string
  Movement?: string
  Coordination?: string
  Notes?: string
}

export interface FamilyHX {
  Similar?: string
  Different?: string
  Medical?: string
  Other?: string
}

export interface PastHX {
  past_psychiatric?: string
  past_medical?: string
  past_surgical?: string
  past_substance?: string
}

export interface SocialHX {
  accommodation?: string
  finances?: string
  indoor?: string
  outdoor?: string
  caregivers?: string
}

export interface PersonalHX {
  familyBackground?: string
  familyAtmosphere?: string
  childhood?: string
  school?: string
  adolescence?: string
}

export interface OccupationHX {
  jobs?: string
  unemployment?: string
}

export interface ForensicHX {
  offenseType?: string
  offenseDate?: string
  attitudeOffense?: string
  attitudePunishment?: string
  prison?: string
}

export interface Development {
  selectedPeripartum?: string[]
  selectedYear?: string[]
}

export interface Examination {
  physical?: string
  appearance?: string
  behavior?: string
  speech?: string
  mood?: string
  affect?: string
  form?: string
  content?: string
  perception?: string
  cognition?: string
  insight?: string
}

export interface Investigation {
  name?: string
  result?: string
}

export interface Ix {
  investigations?: Investigation[]
}

export interface Notes {
  notes?: string
}

export interface Consultation {
  branch?: string
  result?: string
}

export interface Consultations {
  consultations?: Consultation[]
}

export interface Management {
  Name?: string
  Form?: string
  Dose?: string
  Use?: string
}

export interface Managements {
  managements: Management[]
}

export interface DDX {
  'Differential Diagnosis': string
}

export interface Notes {
  Notes: string
}

export interface Therapy {
  id: number
  notes: string
  clinic: Clinic
  psychologist?: Psychologist
  psychologistId?: number
  createdAt: string
  updatedAt: string
  visits?: Visit[]
}
