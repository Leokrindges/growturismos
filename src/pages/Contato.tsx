import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainContato } from "../components/functional/MainContato";

export function Contato() {
  return (
    <Fragment>
    <DefaultLayouts>
      <MainContato></MainContato>
    </DefaultLayouts>
  </Fragment>
  );
}
