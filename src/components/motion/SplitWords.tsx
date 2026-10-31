import { Fragment } from "react";

/**
 * Wraps each word of a heading so it can rise into view on its own line
 * mask (see [data-split] in globals.css). Screen readers get the plain text.
 */
export function SplitWords({ text, offset = 0 }: { text: string; offset?: number }) {
  const words = text.split(" ");
  return (
    <>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="w">
              <span style={{ "--wi": i + offset } as React.CSSProperties}>{word}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </>
  );
}
