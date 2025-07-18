export interface Transakcija
  {
    id: Number;
    "beneficiary-name": String;
    date: Date
    direction: String;
    amount: Number
    description: String;
    currency: Number;
    mcc: Number;
    kind: String;

  }
  export interface Kategorije
  {
    code: number,
    "parent-code": string,
    name: string
  }



