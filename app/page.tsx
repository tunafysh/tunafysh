"use client";
import Main from "@/components/screens/main";
import IframeTabs from "@/components/tabbar";
import { useState } from "react";
import { PageProps } from "@/components/defs";
import { TictactoeScreen, CreprintScreen } from "@/components/screens/screens";

export default function Home() {
  const [currentPage] = useState(0);

  const [pages] = useState<PageProps[]>([{
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
    <div className="w-full h-screen overflow-hidden">
      <IframeTabs />
      {pages[currentPage].screen}
    </div>
  );
}
