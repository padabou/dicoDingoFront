import HomePage from "./home";
import {getHomeData} from "@/lib/home/client";

export default async function IndexPage({searchParams}) {
  const data = await getHomeData();
  return <HomePage data={data}/>;
}

// export const revalidate = 60;
