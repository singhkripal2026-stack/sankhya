import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

function renderLatexSegment(expr: string, displayMode: boolean): string {
  try {
    return katex.renderToString(expr.trim(), {
      displayMode,
      throwOnError: false,
      strict: false,
    });
  } catch {
    return expr;
  }
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '', block = false }) => {
  if (block) {
    const html = renderLatexSegment(text, true);
    return (
      <div
        className={`overflow-x-auto ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Split text by $$...$$ first, then $...$
  const tokens: Array<{ type: 'text' | 'block' | 'inline'; content: string }> = [];
  const blockRegex = /\$\$([\s\S]+?)\$\$/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = blockRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      tokens.push({ type: 'text', content: text.slice(lastIdx, match.index) });
    }
    tokens.push({ type: 'block', content: match[1] });
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    tokens.push({ type: 'text', content: text.slice(lastIdx) });
  }

  const finalParts: Array<{ type: 'text' | 'block' | 'inline'; content: string }> = [];
  const inlineRegex = /\$([^$\n]+?)\$/g;

  for (const token of tokens) {
    if (token.type === 'block') {
      finalParts.push(token);
      continue;
    }
    let idx = 0;
    let inlineMatch: RegExpExecArray | null;
    inlineRegex.lastIndex = 0;
    while ((inlineMatch = inlineRegex.exec(token.content)) !== null) {
      if (inlineMatch.index > idx) {
        finalParts.push({ type: 'text', content: token.content.slice(idx, inlineMatch.index) });
      }
      finalParts.push({ type: 'inline', content: inlineMatch[1] });
      idx = inlineMatch.index + inlineMatch[0].length;
    }
    if (idx < token.content.length) {
      finalParts.push({ type: 'text', content: token.content.slice(idx) });
    }
  }

  return (
    <span className={className}>
      {finalParts.map((part, i) => {
        if (part.type === 'text') {
          return <React.Fragment key={i}>{part.content}</React.Fragment>;
        }
        const html = renderLatexSegment(part.content, part.type === 'block');
        if (part.type === 'block') {
          return (
            <span
              key={i}
              className="block my-2 overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }
        return (
          <span
            key={i}
            className="inline-block align-baseline mx-0.5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </span>
  );
};
