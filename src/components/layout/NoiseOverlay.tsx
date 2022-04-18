import { w } from 'windstitch'

export const NoiseOverlay = w.div(
  'fixed inset-0 z-10 pointer-events-none opacity-30',
  {
    defaultProps: {
      role: 'presentation',
      style: {
        backgroundImage: 'url(/assets/noise.png)',
      },
    },
  },
)
