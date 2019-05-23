import { Color, colors } from "./colorTable";

export interface Tag {
  en: string;
  zh?: string;
  color: Color; // Color of the tag box
}

export const tagInfos: { [id: string]: Tag } = {
  books: { en: "Books", zh: "书籍", color: colors.yellow },
  cpp: { en: "C++", color: colors.red },
  cmake: { en: "CMake", color: colors.green },
  cg: { en: "Graphics", color: colors.violet },
  elm: { en: "Elm", color: colors.teal },
  math: { en: "Mathematics", color: colors.purple },
  functional: {
    en: "Functional Programming",
    zh: "函数式编程",
    color: colors.black
  },
  code: {
    en: "Coding",
    zh: "编程",
    color: colors.blue
  },
  quaternion: {
    en: "Quaternion",
    zh: "四元数",
    color: colors.pink
  },
  rant: {
    en: "Rant",
    color: colors.pink
  },
  test: { en: "Test", zh: "测试", color: colors.orange }
};
