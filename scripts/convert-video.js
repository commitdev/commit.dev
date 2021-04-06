#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const fs = require('fs')
const { parse, join } = require('path')

const ffmpeg = require('fluent-ffmpeg')
const prettyBytes = require('pretty-bytes')
const { hideBin } = require('yargs/helpers')
const yargs = require('yargs/yargs')

const { argv } = yargs(hideBin(process.argv))
  .command(
    'convert-video [options] <video-files...>',
    'convert video for use on web page',
    () => {},
    (argv) => {
      console.info(argv)
    },
  )
  .option('dest', {
    alias: 'd',
    type: 'string',
    description: 'folder where to save optimized files',
    default: '',
  })
  .option('res', {
    alias: 'r',
    type: 'number',
    description: 'output resolution',
    default: 1440,
  })
  .option('fps', {
    type: 'number',
    description: 'frames per second',
    default: 10,
  })
  .demandCommand(1)

const awaitEach = (items = [], callback) =>
  items.reduce(
    (acc, item, index) =>
      Promise.resolve(acc).then(() => callback(item, index)),
    Promise.resolve,
  )

const getFilesizeInBytes = (filename) => {
  const stats = fs.statSync(filename)
  return stats.size
}

const getFileSize = (filename) => {
  const biteSize = getFilesizeInBytes(filename)
  return prettyBytes(biteSize)
}

const logResult = (filename) => {
  console.log(` -- generated ${filename} (${getFileSize(filename)})`)
}

const ffmpegPromise = (input, output, callback) =>
  new Promise((resolve, reject) => {
    const command = ffmpeg(input)
      .output(output)
      .on('error', (err) => {
        console.info(`[ffmpeg] error: ${err.message}`)
        reject(err)
      })
      .on('end', () => {
        logResult(output)
        resolve()
      })

    callback(command).run()
  })

async function main() {
  await awaitEach(argv._, async (file, index) => {
    console.log(
      `${index ? '\n' : ''}Processing ${file} (${getFileSize(file)})...`,
    )

    const { name } = parse(file)

    // generate Poster
    await ffmpegPromise(file, join(argv.dest, `${name}.jpg`), (command) =>
      command.size(`${argv.res}x?`).outputOptions(['-vframes 1', '-q:v 1']),
    )

    // generate WEBM
    await ffmpegPromise(file, join(argv.dest, `${name}.webm`), (command) =>
      command
        .noAudio()
        .fps(argv.fps)
        .size(`${argv.res}x?`)
        .outputOptions(['-c vp9', '-b:v 0', '-crf 41']),
    )

    await ffmpegPromise(file, join(argv.dest, `${name}.mp4`), (command) =>
      command
        .noAudio()
        .fps(argv.fps)
        .size(`${argv.res}x?`)
        .videoCodec('libx264')
        .outputOptions(['-movflags +faststart', '-b:v 0', '-crf 25'])
        .format('mp4'),
    )
  })
  process.exit(0)
}

main()
