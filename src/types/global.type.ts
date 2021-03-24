export type TPosition = "left" | "middle" | "right";

export type TObject = {
  [key: string]: string | number | boolean | unknown;
};

export type TCardItem = {
  streak: string;
  label: string;
  status?: string;
}

