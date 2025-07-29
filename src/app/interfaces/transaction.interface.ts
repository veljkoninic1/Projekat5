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
    splits: Split[];
  }
  export interface Kategorije
  {
    code: number,
    "parent-code": string,
    name: string
  }
 export interface Split{
    name: string,
    amount: number
  }
export interface KategorijaaResponse {
  items: Kategorije[]
}
