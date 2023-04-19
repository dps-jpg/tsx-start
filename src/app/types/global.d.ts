declare module '*scss' {
  type IClassName = Record<string, string>;
  const className: IClassName;
  export = className;
}
