import vl from "vega-lite-api";
// export const viz = vl
//   .markPoint({
//     fill: true,
//     stroke: false,
//     size: 900,
//     opacity: 0.1
//   })
//   .encode(
//     vl.x().fieldQ('acceleration').scale({zero:false}),
//     vl.y().fieldQ('horsepower').scale({zero:false}),
//     vl.tooltip().fieldN('name')
//   );
// export const viz = vl
//   .markCircle({
//     size: 700,
//     opacity: 0.5
//   })
//   .encode(
//     vl.x().fieldQ('acceleration').scale({zero:false}),
//     vl.y().fieldQ('horsepower').scale({zero:false}),
//     vl.color().fieldN("origin"),
//     vl.size().fieldQ("weight").scale({zero:false}),
//     vl.tooltip().fieldN('name')
//   );
export const viz = vl
  .markCircle({
    size: 10000,
    opacity: 0.2,
  })
  .encode(
    vl.x().fieldN("origin"),
    vl.y().fieldQ("horsepower").scale({ zero: false }),
    vl.color().fieldN("origin"),
    vl.size().fieldQ("horsepower").scale({ zero: false }),
    vl.tooltip().fieldN("name")
  );
