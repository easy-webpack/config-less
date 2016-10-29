import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
import * as easyCss from '@easy-webpack/config-css'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * LESS loader support for *.less
 * filename: name of the extracted file
 * allChunks: should we extract all chunks to the file?
 * sourceMap: do you want a sourceMap generated? (takes longer)
 * extractText: do you want to extract all css to a separate file? boolean, configuration object or instance of ExtractTextPlugin, defaults to true
 * resolveRelativeUrl: boolean or object with parameters
 */
export = function less({ filename = '[name].css', allChunks = false, sourceMap = false, extractText = undefined, resolveRelativeUrl = undefined, additionalLoaders = [] } = {}) {
  additionalLoaders.push(`less${sourceMap ? '?sourceMap' : ''}`)
  return easyCss({ test: /\.less$/i, filename, allChunks, extractText, resolveRelativeUrl, sourceMap, additionalLoaders })
}