/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
