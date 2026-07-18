import { compileMdx } from "nextra/compile";
import { MDXRemote, type MDXRemoteProps } from "nextra/mdx-remote";

interface MDXContentProps {
  mdxSource: string;
  className?: string;
  components?: MDXRemoteProps["components"];
  scope?: MDXRemoteProps["scope"];
}

export default async function MDXContent({ mdxSource, className, ...props }: MDXContentProps) {
  const compiledSource = await compileMdx(mdxSource);
  return (
    <MDXRemote
      compiledSource={compiledSource}
      components={{
        ...props.components,
        span: (props) => <span className={`not-prose ${className ?? ""}`} {...props} />,
        h3: (props) => (
          // oxlint-disable-next-line jsx-a11y/heading-has-content -- children arrive through MDX props.
          <h3 className={`not-prose text-base font-bold ${className ?? ""}`} {...props} />
        ),
        p: (props) => <p className={`not-prose ${className ?? ""}`} {...props} />,
      }}
      scope={props.scope}
    />
  );
}
