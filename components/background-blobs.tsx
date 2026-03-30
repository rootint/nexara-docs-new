'use client';

export function BackgroundBlobs() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 1,
        animation: 'blobFadeIn 0.7s ease',
      }}
    >
      <img
        src="/blobs/green.svg"
        alt=""
        width={794}
        style={{
          position: 'absolute',
          right: -600,
          bottom: -300,
        }}
      />
      <img
        src="/blobs/red.svg"
        alt=""
        width={547}
        style={{
          position: 'absolute',
          top: -400,
          left: '20%',
        }}
      />
      <img
        src="/blobs/orange.svg"
        alt=""
        width={685}
        style={{
          position: 'absolute',
          bottom: 0,
          left: -500,
        }}
      />
      <img
        src="/blobs/purple.svg"
        alt=""
        width={794}
        style={{
          position: 'absolute',
          right: -350,
          top: 10,
        }}
      />
    </div>
  );
}
