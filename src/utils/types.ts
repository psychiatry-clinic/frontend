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
  family_hx?: string
  past_hx?: string
  occupation_hx?: string
  forensic_hx?: string
  social_hx?: string
  personal_hx?: string
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
  duration?: number
  chief_complaint?: Chief_complaint
  present_illness?: string
  suicide?: string
  examination?: string
  ddx?: { differential: string }
  management?: { managements: ManagementItem[] }
  ix?: JSON
  consultations?: string
  prescription?: Prescription
  prescriptionId?: number
  tests: Test[]
  therapyId?: number
  therapy?: Therapy
  notes?: string
  insight?: string
  createdAt: string
  updatedAt: string
}

interface ManagementItem {
  dose: string
  form: string
  name: string
  use: string
}

interface differ {
  differential: string
}

export interface Doctor {
  id: number
  name: string
  phone: string
  avatar?: string
  visits: Visit[]
  user: User[]
  prescriptions: Prescription[]
  patients: Patient[]
  createdAt: string
  updatedAt: string
}

enum Clinic {
  Kadhimiya = 'Kadhimiya',
  BaghdadTeachingHospital = 'BaghdadTeachingHospital',
  AutismCenter = 'AutismCenter',
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

interface Psychologist {
  id: number
  name: string
  phone: string
  user: User[]
  therapies: Therapy[]
  createdAt: string
  updatedAt: string
}

interface Chief_complaint {
  complaint: string
  duration: string
  referral: string
  source: string
}
