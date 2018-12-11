declare type ConditionFn = (...args: any[]) => boolean;
declare type ResultFn = (...args: any[]) => any;
declare type Clause = [ConditionFn, ResultFn];
export declare function cond(clauses: Clause[]): (...args: any[]) => any;
export {};
