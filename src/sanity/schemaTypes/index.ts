import type { SchemaTypeDefinition } from "sanity";
import { campaign } from "./campaign";
import { spotlight } from "./spotlight";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [campaign, spotlight],
};
