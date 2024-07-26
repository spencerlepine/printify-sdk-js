global.fetch = jest.fn((url, options) =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  })
);
