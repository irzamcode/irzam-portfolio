export type MenuCategory = {
  title: string;
  items: { name: string; price: string; note?: string }[];
};

// ✅ Vercel側のビルドが探してる名前
export const menuCategories: MenuCategory[] = [
  {
    title: "Cut Menu",
    items: [
      { name: "Cut", price: "¥6,600〜", note: "シャンプー&ブロー込み" },
      { name: "Bangs Cut", price: "¥1,320〜" },
      { name: "Face-line Cut", price: "¥3,300〜" },
    ],
  },
  {
    title: "Color Menu",
    items: [
      { name: "Color", price: "¥8,800〜" },
      { name: "Bleach", price: "¥9,900〜" },
      { name: "Highlights", price: "¥7,700〜" },
    ],
  },
  {
    title: "Care Menu",
    items: [
      { name: "Treatment", price: "¥4,400〜" },
      { name: "Head Spa", price: "¥4,400〜" },
    ],
  },
];

// ✅ もし他の場所で menu を使ってるなら互換のため残す
export const menu = menuCategories;