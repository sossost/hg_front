import TurndownService from "turndown";

import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

const turndownService = new TurndownService();

/** HTML 을 Markdown 으로 변환하는 함수 */
export const htmlToMd = (data: string): string => {
  console.log(data);
  return turndownService.turndown(data);
};

/** Markdown 을 HTML 으로 변환하는 함수 */
export const mdToHtml = (data: string): string => {
  return unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .processSync(data)
    .toLocaleString();
};
