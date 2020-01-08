const getType = (v: any): string => {
  return Object.prototype.toString.call(v);
}

export const isArray = (arr: any): arr is Array<any> => {
  return getType(arr) === '[object Array]'
}
