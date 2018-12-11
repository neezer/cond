export const cond = (
  clauses: [(...args: any[]) => boolean, (...args: any[]) => any]
) => {
  return (...args: any[]) => {
    clauses.forEach(clause => {
      if (Array.isArray(clause)) {
        const [conditionFn, resultFn] = clause;

        if (conditionFn.apply(null, args)) {
          return resultFn.apply(null, args);
        }
      }
    });
  };
};

// new hotness
// type CondClause = [(value: any) => boolean, (value: any) => any];

// const cond = (clauses: CondClause[]) => {
//   return (value: any) => {
//     let result;

//     for (const clause of clauses) {
//       if (Array.isArray(clause)) {
//         const [conditionFn, resultFn] = clause;

//         if (conditionFn(value)) {
//           result = resultFn(value);
//           break;
//         }
//       }
//     }

//     return result;
//   };
// };
