"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { store } from "@/app/store/store";
import client from "@/app/lib/apolloClient";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
}
