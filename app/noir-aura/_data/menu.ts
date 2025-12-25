export type MenuItem = { name: string; price: string; note?: string };

export type MenuCategory = {
  id: "cut" | "color" | "care";
  title: string;
  subtitle?: string; // ✅追加（あってもなくてもOK）
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "cut",
    title: "Cut Menu",
    subtitle: "Design / Top / Director（デモ）",
    items: [
      { name: "Cut", price: "¥6,600〜", note: "シャンプー&ブロー込み" },
      { name: "Bangs Cut", price: "¥1,320〜" },
      { name: "Face-line Cut", price: "¥3,300〜" },
    ],
  },
  {
    id: "color",
    title: "Color Menu",
    subtitle: "Transparency / Damage-care（デモ）",
    items: [
      { name: "Color", price: "¥8,800〜" },
      { name: "Bleach", price: "¥9,900〜" },
      { name: "Highlights", price: "¥7,700〜" },
    ],
  },
  {
    id: "care",
    title: "Care Menu",
    subtitle: "Treatment / Spa（デモ）",
    items: [
      { name: "Treatment", price: "¥4,400〜" },
      { name: "Head Spa", price: "¥4,400〜" },
    ],
  },
];

// 互換（どっちでimportしても動くように）
export const menu = menuCategories;
