export interface Patient {
  id: number;
  name: string;
  dob: number;
  gender: string;
  avatar: string;
  father_edu: string;
  mother_edu: string;
  phone: null | string;
  familyHx: null | string;
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
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: number
  username: string
  password: string
  role: string
}

export interface Visit {
  id: number;
  patientId: number;
  doctorId: number;
  clinic: string;
  duration: number;
  chief_complaint: string;
  present_illness: string;
  suicide: null | any;
  family_hx: null | any;
  past_psychiatric_hx: null | any;
  past_medical_hx: null | any;
  forensic_hx: null | any;
  social_hx: null | any;
  drug_hx: null | any;
  substance: null | any;
  personal_hx: null | any;
  appearance: null | any;
  behavior: null | any;
  speech: null | any;
  mood: null | any;
  thought_form: null | any;
  thought_content: null | any;
  perception: null | any;
  cognitive_state: null | any;
  differential_diagnosis: null | any;
  management: null | any;
  prescriptionId: null | any;
  notes: null | any;
  insight: null | any;
  createdAt: string;
  updatedAt: string;
}


export interface Prescription {
  id: number;
  patientId: number;
  doctorId: number;
  dosage: string;
  instructions: string;
  createdAt: string;
  updatedAt: string;
}

export interface Test {
  id: number;
  name: string;
  type: string;
  range: string;
  value: string;
  patientId: number;
  visitId: number;
  createdAt: string;
  updatedAt: string;
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
