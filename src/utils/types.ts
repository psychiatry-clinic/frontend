export interface Patient {
  id: number;
  name: string;
  dob: number;
  gender: string;
  avatar: string;
  father_edu: string;
  mother_edu: string;
  phone: null | string;
  familyHx: null | JSON;
  father_dob: null | number;
  mother_dob: null | number;
  father_age: null | number;
  mother_age: null | number;
  father_work: null | string;
  mother_work: null | string;
  siblings: null | number;
  order: null | number;
  related:boolean;
  notes: null | string;
  visits?: Visit[];
  demographics?: Demographics[]; // Assuming demographics data structure is unknown
  prescriptions?: Prescription[];
  tests?: Test[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number
  username: string
  password: string
  role: string
}
export interface Prescription {
  id: number;
  patientId: number;
  doctorId: number;
  dosage: string;
  instructions: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Test {
  id: number;
  name: string;
  type: string;
  range: string;
  value: string;
  patientId: number;
  visitId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Demographics {
  id:number
  patient?: Patient; // Assuming Patient interface is defined elsewhere
  patientId?: number;
  marital_status?: string | null;
  occupation?: string | null;
  children?: string | null;
  residence?: string | null;
  neighborhood?:string | null;
  education?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Visit {
  id: number;
  patient: Patient;
  patientId: number;
  doctor?: Doctor;
  doctorId?: number;
  clinic: Clinic;
  duration?: number;
  chief_complaint?: string;
  present_illness?: string;
  suicide?: string;
  past_psychiatric_hx?: string;
  past_medical_hx?: string;
  forensic_hx?: string;
  social_hx?: string;
  drug_hx?: string;
  substance?: string;
  personal_hx?: string;
  appearance?: string;
  behavior?: string;
  speech?: string;
  mood?: string;
  thought_form?: string;
  thought_content?: string;
  perception?: string;
  cognitive_state?: string;
  differential_diagnosis?: string;
  management?: string;
  prescription?: Prescription;
  prescriptionId?: number;
  tests: Test[];
  sessionId?: number;
  session?: Session;
  notes?: string;
  insight?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Doctor {
  id: number;
  name: string;
  phone: string;
  avatar?: string;
  visits: Visit[];
  user: User[];
  prescriptions: Prescription[];
  patients: Patient[];
  createdAt: Date;
  updatedAt: Date;
}

enum Clinic {
  Kadhimiya = "Kadhimiya",
  BaghdadTeachingHospital = "BaghdadTeachingHospital",
  AutismCenter = "AutismCenter",
}


export interface Session {
  id: number;
  notes: string;
  clinic: Clinic;
  psychologist?: Psychologist;
  psychologistId?: number;
  visits?: Visit[];
  createdAt: Date;
  updatedAt: Date;
}

interface Psychologist {
  id: number;
  name: string;
  phone: string;
  user: User[];
  sessions: Session[];
  createdAt: Date;
  updatedAt: Date;
}
