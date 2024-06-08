import { Button } from '@repo/ui';
import { useEffect } from 'react';
import { videoTypeSelectors } from '../stores/video-type-atom';

export const KnashoTypeSelect = () => {
  const selectedVideoType = videoTypeSelectors.useSelectedVideoType();
  const setNextVideoType = videoTypeSelectors.useSetNextVideoType();

  useEffect(() => {
    if (!selectedVideoType) {
      setNextVideoType();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTypeClick = () => {
    setNextVideoType();
  };

  return (
    <>
      <Button variant="default" className="my-1 py-0" onClick={() => handleTypeClick()}>
        {selectedVideoType?.name}
      </Button>
    </>
  );
};
