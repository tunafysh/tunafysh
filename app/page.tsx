"use client";
import Main from "@/components/screens/main";
import TabBar, {Tab} from "@/components/tabbar";
import { ReactNode, useEffect, useState } from "react";
interface Page {
  title: string;
  status: 'closed' | 'open' | 'indestructible';
  icon: ReactNode;
  screen: ReactNode;
}

export default function Home() {
  const [pages, setPages] = useState<Page[]>([]);
  const addPage = (page: Page) => {
    setPages((prevPages) => [...prevPages, page]);
  };

  useEffect(() => {
    if(pages.length < 0){

      addPage({
        title: 'Home',
        status: 'indestructible',
        icon: <svg width={50} height={50}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>,
      screen: <Main />,
    })
    addPage({
      title: 'idk',
      status: 'open',
      icon: <svg width={50} height={50}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>,
    screen: <Main />,
  })
  }
  },[])

  return (
    <>
      <TabBar>
        {pages.map((page) => (
          <Tab title={page.title} icon={page.icon} status={page.status} key={page.title} />
        ))}
      </TabBar>
    </>
  );
}
