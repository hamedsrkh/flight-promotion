export interface Promotion {
  origin: string
  destination: string
  departureDate: string
  returnDate: string
  seatAvailability: number
  price: { amount: number; currency: string }
  offerType: string
  uuid: string
}

export type AutoCompleteItem = { label: string; value: string }
