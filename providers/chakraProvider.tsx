"use client";
import { ChakraProvider } from "@chakra-ui/react";
import TanstackProvider from "./tanstackProvider";

export function ChakraWrapperProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TanstackProvider>
			<ChakraProvider theme={} >{children}</ChakraProvider>
		</TanstackProvider>
	);
}
