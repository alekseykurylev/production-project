import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (
    options: BuildOptions,
): webpack.Configuration => {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
