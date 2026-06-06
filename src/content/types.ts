export type CommandSnippet = {
  label: string;
  value: string;
  note?: string;
};

export type Tool = {
  name: string;
  description: string;
  href: string;
  label: string;
  accent: string;
  commands?: CommandSnippet[];
};

export type Section = {
  title: string;
  subtitle: string;
  items: Tool[];
};
