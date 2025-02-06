declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "generalStyles" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*icon.svg" {
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module "*.png" {
  const link: string;
  export default link;
}
