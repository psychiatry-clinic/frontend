export interface Patient {
  id: number
  name: string
  dob: number
  gender: string
  phone: string
  createdAt: string
  updatedAt: string
}

export interface User {
  id: number
  username: string
  password: string
  role: string
}
