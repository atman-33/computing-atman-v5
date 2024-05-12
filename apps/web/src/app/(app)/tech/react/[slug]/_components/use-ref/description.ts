const description = `
### 説明

useRefのサンプルコード

### 利用するshadcn/uiコンポーネント

- input
- button

### サンプルコード


#### Example.tsx

~~~typescript
'use client';

import { Button, Input } from '@repo/ui';
import { useRef, useState } from 'react';
import { DynamicVideo } from './_components/DynamicVideo';

const Case1 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef({} as HTMLInputElement);

  return (
    <>
      <h3>Use case 1: Focus input</h3>
      <Input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />

      <Button className="mt-4" onClick={() => inputRef.current.focus()}>
        Focus Input
      </Button>
    </>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef({} as HTMLVideoElement);

  return (
    <>
      <h3>Use case 2: Play/Pause video</h3>

      <DynamicVideo src="/tech/react/sample.mp4" videoRef={videoRef} />

      <Button
        className="mt-2"
        onClick={() => {
          if (playing) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? 'Pause' : 'Play'}
      </Button>
    </>
  );
};

const Example = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Case1 />
      </div>
      <div>
        <Case2 />
      </div>
    </div>
  );
};

export { Example };
~~~

#### DynamicVideo.tsx

~~~typescript
import dynamic from 'next/dynamic';
import { Ref } from 'react';

const Video = ({ src, videoRef }: { src: string; videoRef: Ref<HTMLVideoElement> }) => {
  return (
    <video className="max-w-full" ref={videoRef}>
      <source src={src} />
    </video>
  );
};

const DynamicVideoLoader = ({
  src,
  videoRef,
}: {
  src: string;
  videoRef: Ref<HTMLVideoElement>;
}) => {
  return <Video src={src} videoRef={videoRef} />;
};

const DynamicVideo = dynamic(() => Promise.resolve(DynamicVideoLoader), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export { DynamicVideo };
~~~

`;

export { description as UseRefDescription };
