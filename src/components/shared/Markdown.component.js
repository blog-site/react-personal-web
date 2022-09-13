import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

const mapProps = (props) => ({
  ...props,
  remarkPlugins: [remarkMath, remarkGfm],
  rehypePlugins: [rehypeKatex]
});

const Markdown = (props) => <ReactMarkdown {...mapProps(props)} />;

export default Markdown;