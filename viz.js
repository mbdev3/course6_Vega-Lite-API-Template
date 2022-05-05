import vl from 'vega-lite-api';
export const viz = vl
  .markPoint({
    fill: true,
    stroke: false,
    size: 900,
    opacity: 0.1
  })
  .encode(
    vl.x().fieldQ('displacement').scale({ zero: false }),
    vl.y().fieldQ('horsepower').scale({ zero: false }),
    vl.tooltip().fieldN('name')
  );