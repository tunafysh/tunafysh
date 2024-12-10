import { Dispatch, SetStateAction } from "react";
import { PageProps } from "./defs";

export const addPage = (setPages: Dispatch<SetStateAction<PageProps[]>>, page: PageProps) => {
    setPages((prevPages) => [...prevPages, page]);
  };

export const removePage = (setPages: Dispatch<SetStateAction<PageProps[]>>, index: number) => {
    setPages((prevPages) =>
      prevPages.map((page, i) =>
        i === index ? { ...page, status: "closed" } : page
      )
    );
  }