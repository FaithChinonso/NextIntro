import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The news page</h1>;
      <ul>
        <li>
          <Link href="/news/mice">Mice</Link>
        </li>
        <li>
          <Link href="/news/rat">Rat</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
