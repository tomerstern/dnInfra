// interface String {
//     isNullOrEmpty(param: string): string;
// }

// String.prototype.isNullOrEmpty = function(param) {
//     return (!param || param === undefined || param === '' || param.length === 0);
// };

declare global { interface String { isNullOrEmpty(value: string): boolean; }}
String.prototype.isNullOrEmpty = (value: string) => !value;

declare global { interface String { isNumber(value: string): boolean; }}
String.prototype.isNumber = (value: string) => /^-?[\d.]+(?:e-?\d+)?$/.test(value);

export {};

