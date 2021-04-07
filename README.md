# commit.dev-proto
Marketing website for Commit (commit.dev)

### Importing static images

**1)** Place the image you want to display in the `/static/` folder
**2)** Display the image with [`<Image>`](./components/media/image.js) component:
```jsx
<Image {...getStaticImage('my-image-name.png')} alt="My image" />
```

Images are automatically generated at build time and lazy-loaded at run time.


### Generating web-optimized video files

Optimize videos for use as background elements, just like animated GIFs but smaller in size. Generates poster image `jpg` and web-friendly video formats `mp4`, `webm`. Input video can be of any format supported by [ffmpeg](https://www.ffmpeg.org/).

**1)** Start by installing `ffmpeg`, if you don't already have it:
```
brew install ffmpeg
```

**2)** Run convert script from the project root folder passing the video(s) you want to optimize as argument:
```
npm run convert-video -- ~/path/to/video.mov
```

Example output:
```
Processing ~/path/to/video.mov (13.4 MB)...
 -- generated static/videos/video.jpg (151 kB)
 -- generated static/videos/video.webm (337 kB)
 -- generated static/videos/video.mp4 (1.28 MB)
```

**3)** Use generated files with [`<BackgroundVideo>`](./components/media/video.js) component:
```jsx
<BackgroundVideo {...getStaticVideo('video')} alt="My background video" />
```

Videos are lazy-loaded at run time.
