export interface Loan {
  id: string
  amount: number
  interestRate: number
  term: number
  purpose: string
  riskRating: string
  borrower: {
    id: string
    name: string
    email: string
    creditScore: number
  }
  collateral: {
    type: string
    value: number
  }
  documents: {
    type: string
    url: string
  }[]
  repaymentSchedule: {
    installments: {
      dueDate: string
      amountDue: number
    }[]
  }
}

export interface LoanListResponse {
  data: Array<Loan>
  maxPage: number
}
