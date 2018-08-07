import { Header } from "../header";
import './layout.less'

export const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);
