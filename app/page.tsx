"use client";
import Main from "@/components/screens/main";
import TabBar from "@/components/tabbar";
import { useState } from "react";
import { PageProps } from "@/components/defs";

export default function Home() {
  const [, setCurrentPage] = useState(0);

  const [pages, setPages] = useState<PageProps[]>([{
    title: 'Home',
    status: 'indestructible',
    screen: <Main />,
  },{
    title: 'idk',
    status: 'open',
    screen: <Main />,
  },{
    title: 'idk but diff',
    status: 'closed',
    screen: <Main />,
  }]);

  return (
    <>
      <TabBar pages={pages} setPages={setPages} setCurrentPage={setCurrentPage} />
    </>
  );
}
