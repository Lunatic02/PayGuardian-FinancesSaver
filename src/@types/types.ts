export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  description: string;
  expentAt: string;
  type: string;
  userId: string;
}

export interface RegisterNewTransactionParams {
  title: string,
  amount: number,
  description: string,
  income: string,
  category: string
  e: any
}