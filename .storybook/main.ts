import type { InlineConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Making storybook go into tsconfig and search all the properties we defined
  viteFinal: async (config) => {
    // Modify the Vite configuration here
    config.plugins?.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );

    // Return the modified Vite configuration
    return config;
  },
};

export default config;
