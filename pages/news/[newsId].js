import { useRouter } from "next/router";

const Some = () => {
  const router = useRouter();
  const id = router.query.newsId;
  return <h1>The Some page</h1>;
};

export default Some;
