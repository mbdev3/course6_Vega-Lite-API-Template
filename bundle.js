(function (vega, vegaLite, vl, vegaTooltip, d3) {
  'use strict';

  vega = vega && vega.hasOwnProperty('default') ? vega['default'] : vega;
  vegaLite = vegaLite && vegaLite.hasOwnProperty('default') ? vegaLite['default'] : vegaLite;
  vl = vl && vl.hasOwnProperty('default') ? vl['default'] : vl;

  // Appearance customization to improve readability.
  // See https://vega.github.io/vega-lite/docs/
  const dark = '#3e3c38';
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark
      }
    }
  };

  const csvUrl = 'https://gist.githubusercontent.com/curran/8c131a74b85d0bb0246233de2cff3f52/raw/194c2fc143790b937c42bf086a5a44cb3c55340e/auto-mpg.csv';

  const getData = async () => {
    const data = await d3.csv(csvUrl);
    
    // Have a look at the attributes available in the console!
    console.log(data[0]);

    return data;
  };

  const viz = vl
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

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call); }
  });

  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);
    
    document.body.appendChild(await marks.render());
  };
  run();

}(vega, vegaLite, vl, vegaTooltip, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImdldERhdGEuanMiLCJ2aXouanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlYXJhbmNlIGN1c3RvbWl6YXRpb24gdG8gaW1wcm92ZSByZWFkYWJpbGl0eS5cbi8vIFNlZSBodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EtbGl0ZS9kb2NzL1xuY29uc3QgZGFyayA9ICcjM2UzYzM4JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGF4aXM6IHtcbiAgICBkb21haW46IGZhbHNlLFxuICAgIHRpY2tDb2xvcjogJ2xpZ2h0R3JheSdcbiAgfSxcbiAgc3R5bGU6IHtcbiAgICBcImd1aWRlLWxhYmVsXCI6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZpbGw6IGRhcmtcbiAgICB9LFxuICAgIFwiZ3VpZGUtdGl0bGVcIjoge1xuICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgZmlsbDogZGFya1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNzdlVybCA9ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2N1cnJhbi84YzEzMWE3NGI4NWQwYmIwMjQ2MjMzZGUyY2ZmM2Y1Mi9yYXcvMTk0YzJmYzE0Mzc5MGI5MzdjNDJiZjA4NmE1YTQ0Y2IzYzU1MzQwZS9hdXRvLW1wZy5jc3YnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGNzdihjc3ZVcmwpO1xuICBcbiAgLy8gSGF2ZSBhIGxvb2sgYXQgdGhlIGF0dHJpYnV0ZXMgYXZhaWxhYmxlIGluIHRoZSBjb25zb2xlIVxuICBjb25zb2xlLmxvZyhkYXRhWzBdKTtcblxuICByZXR1cm4gZGF0YTtcbn07IiwiaW1wb3J0IHZsIGZyb20gJ3ZlZ2EtbGl0ZS1hcGknO1xuZXhwb3J0IGNvbnN0IHZpeiA9IHZsXG4gIC5tYXJrUG9pbnQoe1xuICAgIGZpbGw6IHRydWUsXG4gICAgc3Ryb2tlOiBmYWxzZSxcbiAgICBzaXplOiA5MDAsXG4gICAgb3BhY2l0eTogMC4xXG4gIH0pXG4gIC5lbmNvZGUoXG4gICAgdmwueCgpLmZpZWxkUSgnZGlzcGxhY2VtZW50Jykuc2NhbGUoeyB6ZXJvOiBmYWxzZSB9KSxcbiAgICB2bC55KCkuZmllbGRRKCdob3JzZXBvd2VyJykuc2NhbGUoeyB6ZXJvOiBmYWxzZSB9KSxcbiAgICB2bC50b29sdGlwKCkuZmllbGROKCduYW1lJylcbiAgKTsiLCJpbXBvcnQgdmVnYSBmcm9tICd2ZWdhJztcbmltcG9ydCB2ZWdhTGl0ZSBmcm9tICd2ZWdhLWxpdGUnO1xuaW1wb3J0IHZsIGZyb20gJ3ZlZ2EtbGl0ZS1hcGknO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJ3ZlZ2EtdG9vbHRpcCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9nZXREYXRhJztcbmltcG9ydCB7IHZpeiB9IGZyb20gJy4vdml6JztcblxudmwucmVnaXN0ZXIodmVnYSwgdmVnYUxpdGUsIHtcbiAgdmlldzogeyByZW5kZXJlcjogJ3N2ZycgfSxcbiAgaW5pdDogdmlldyA9PiB7IHZpZXcudG9vbHRpcChuZXcgSGFuZGxlcigpLmNhbGwpOyB9XG59KTtcblxuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYXJrcyA9IHZpelxuICAgIC5kYXRhKGF3YWl0IGdldERhdGEoKSlcbiAgICAud2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgLmF1dG9zaXplKHsgdHlwZTogJ2ZpdCcsIGNvbnRhaW5zOiAncGFkZGluZycgfSlcbiAgICAuY29uZmlnKGNvbmZpZyk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF3YWl0IG1hcmtzLnJlbmRlcigpKTtcbn07XG5ydW4oKTsiXSwibmFtZXMiOlsiY3N2IiwiSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQUFBOztFQUVBLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQztFQUNoQixNQUFNLE1BQU0sR0FBRztJQUNwQixJQUFJLEVBQUU7TUFDSixNQUFNLEVBQUUsS0FBSztNQUNiLFNBQVMsRUFBRSxXQUFXO0tBQ3ZCO0lBQ0QsS0FBSyxFQUFFO01BQ0wsYUFBYSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsSUFBSTtPQUNYO01BQ0QsYUFBYSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsSUFBSTtPQUNYO0tBQ0Y7R0FDRjs7RUNoQkQsTUFBTSxNQUFNLEdBQUcsc0lBQXNJLENBQUM7O0FBRXRKLEVBQU8sTUFBTSxPQUFPLEdBQUcsWUFBWTtJQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNQSxNQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7OztJQUcvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVyQixPQUFPLElBQUksQ0FBQztHQUNiOztFQ1ZNLE1BQU0sR0FBRyxHQUFHLEVBQUU7S0FDbEIsU0FBUyxDQUFDO01BQ1QsSUFBSSxFQUFFLElBQUk7TUFDVixNQUFNLEVBQUUsS0FBSztNQUNiLElBQUksRUFBRSxHQUFHO01BQ1QsT0FBTyxFQUFFLEdBQUc7S0FDYixDQUFDO0tBQ0QsTUFBTTtNQUNMLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO01BQ3BELEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO01BQ2xELEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQzVCOztFQ0pILEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUMxQixJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ3pCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUlDLG1CQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO0dBQ3BELENBQUMsQ0FBQzs7RUFFSCxNQUFNLEdBQUcsR0FBRyxZQUFZO0lBQ3RCLE1BQU0sS0FBSyxHQUFHLEdBQUc7T0FDZCxJQUFJLENBQUMsTUFBTSxPQUFPLEVBQUUsQ0FBQztPQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztPQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztPQUMxQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztPQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBRWxCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7R0FDakQsQ0FBQztFQUNGLEdBQUcsRUFBRTs7OzsifQ==