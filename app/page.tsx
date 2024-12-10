"use client";
import Main from "@/components/screens/main";
import TabBar from "@/components/tabbar";
import { useState } from "react";
import { PageProps } from "@/components/defs";
import { TictactoeScreen, CatalystScreen, CreprintScreen } from "@/components/screens/screens";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const [pages, setPages] = useState<PageProps[]>([{
    title: 'Home',
    status: 'indestructible',
    screen: <Main />,
  },{
    title: 'Tictactoe',
    status: 'open',
    screen: <TictactoeScreen />,
  },{
    title: 'Creative Print',
    status: 'open',
    screen: <CreprintScreen />,
  }]);

  return (
    <div className="w-full h-screen">
      <TabBar pages={pages} currentPage={currentPage} setPages={setPages} setCurrentPage={setCurrentPage} />
      {pages[currentPage].screen}
    </div>
  );
}
