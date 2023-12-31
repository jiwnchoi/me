import { Heading, Text } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <Heading as="h1" color="green">
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text as={"p"} fontSize={"lg"} lineHeight={2} textAlign={"left"}>
        {children}
      </Text>
    ),
    a: (props) => <a style={{ color: "red" }} {...props} />,
    ...components,
  };
}
