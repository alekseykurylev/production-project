import type webpack from "webpack";
import { RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");
  config.module?.rules?.push(buildCssLoader(true));

  const rules = config?.module?.rules as RuleSetRule[];
  const imageRule = rules.find((rule) => rule?.test instanceof RegExp && rule.test.test(".svg"));
  if (imageRule) {
    imageRule.exclude = /\.svg$/;
  }

  rules.push({
    test: /\.svg$/,
    use: [{ loader: "@svgr/webpack", options: { icon: "24" } }],
  });

  return config;
};
