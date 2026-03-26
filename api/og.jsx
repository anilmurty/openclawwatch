import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#070d1a',
          backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(61,142,255,0.18) 0%, transparent 70%)',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              border: '2px solid #3d8eff',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d8eff',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '22px',
              fontWeight: 500,
              color: '#f5f8ff',
              letterSpacing: '-0.02em',
            }}
          >
            Open<span style={{ color: '#3d8eff' }}>Claw</span>Watch
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f5f8ff',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          Observe every agent.
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#3d8eff',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Locally.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(245,248,255,0.65)',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Open-source, OTel-native observability for autonomous AI agents.
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            backgroundColor: 'rgba(61,142,255,0.1)',
            border: '1px solid rgba(61,142,255,0.3)',
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#3d8eff',
          }}
        >
          MIT License · OTel GenAI SemConv · No signup required
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
