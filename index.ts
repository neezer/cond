type ConditionFn = (...args: any[]) => boolean;
type ResultFn = (...args: any[]) => any;
type Clause = [ConditionFn, ResultFn];

export function cond(clauses: Clause[]): (...args: any[]) => any {
  return (...args) => {
    for (let i = 0, l = clauses.length; i < l; i++) {
      if (Array.isArray(clauses[i])) {
        if (clauses[i][0].apply(null, args)) {
          return clauses[i][1].apply(null, args);
        }
      }
    }
  };
}
