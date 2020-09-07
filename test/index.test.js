const { getLicense, getLicenses } = require('../build/index.js');

test("one", () => {
  getLicense("MIT", ({ name }) => {
    expect(name).toBe("MIT License");
  });
});


test("all", () => {
  getLicenses().then((licenses) => {
    expect(licenses["MIT"].name).toBe("MIT License");
  });
});

test("made up", () => {
  getLicense("adsdfj", (license) => {
    expect(license).toBe(undefined);
  });
});
