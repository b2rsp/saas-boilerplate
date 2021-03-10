import { useState } from "react";

export function useExampleHook() {
  const [example, setExample] = useState("Hello");
  return [example, setExample];
}
