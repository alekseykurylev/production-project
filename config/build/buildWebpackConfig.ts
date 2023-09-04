import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
