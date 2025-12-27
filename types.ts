
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  SALON_OWNER = 'SALON_OWNER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Salon {
  id: string;
  name: string;
  ownerId: string;
  location: string;
  rating: number;
  image: string;
  services: Service[];
  verified: boolean;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: string;
}

export interface Booking {
  id: string;
  salonId: string;
  customerId: string;
  serviceId: string;
  status: 'PENDING' | 'ACCEPTED' | 'COMPLETED' | 'CANCELLED';
  date: string;
  time: string;
  price: number;
}
