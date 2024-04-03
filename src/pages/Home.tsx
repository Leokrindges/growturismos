import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { Main } from "../components/functional/Main";


export function Home() {
  return (
    <Fragment>
      <DefaultLayouts>
        <Main></Main>
      </DefaultLayouts>
    </Fragment>
  );
}
