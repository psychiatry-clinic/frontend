export interface Patient {
  id: number;
  name: string;
  dob: number;
  gender: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  visits: Visit[];
  demographics: any[]; // Assuming demographics data structure is unknown
  prescriptions: Prescription[];
  tests: Test[];
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
