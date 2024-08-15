import type { StorybookConfig } from "@storybook/nextjs";
import '@storybook/addon-console';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "storybook-dark-mode",
    "storybook-version"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [],
};
export default config;
