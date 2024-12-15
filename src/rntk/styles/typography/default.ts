import { Scaling } from '../scaling';
import type { ThemeTypography } from './typography.types';

const typography: ThemeTypography = {
  h3: {
    fontSize: Scaling.f(34),
    lineHeight: Scaling.f(34),
    letterSpacing: Scaling.f(-0.25),
  },
  h2: {
    fontSize: Scaling.f(28),
    lineHeight: Scaling.f(28),
    letterSpacing: Scaling.f(-0.15),
  },
  h1: {
    fontSize: Scaling.f(24),
    lineHeight: Scaling.f(24),
    letterSpacing: Scaling.f(0),
  },
  subhead: {
    fontSize: Scaling.f(18),
    lineHeight: Scaling.f(18),
    letterSpacing: Scaling.f(0),
  },
  body: {
    fontSize: Scaling.f(16),
    lineHeight: Scaling.f(16),
    letterSpacing: Scaling.f(0),
  },
  caption: {
    fontSize: Scaling.f(12),
    lineHeight: Scaling.f(12),
    letterSpacing: Scaling.f(0),
  },
  footnote: {
    fontSize: Scaling.f(10),
    lineHeight: Scaling.f(10),
    letterSpacing: Scaling.f(0),
  },
};

export default typography;
