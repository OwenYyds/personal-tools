import { basicSection } from "./basic";
import { developmentSection } from "./development";
import { macosSection } from "./macos";
import { productivitySection } from "./productivity";
import { quickLinks } from "./quickLinks";
import { windowsSection } from "./windows";

export { quickLinks };
export type { CommandSnippet, Section, Tool } from "./types";

export const sections = [
  basicSection,
  productivitySection,
  developmentSection,
  windowsSection,
  macosSection,
];
