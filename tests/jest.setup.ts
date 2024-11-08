const axios = require('axios');

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockResolvedValue({
  data: { success: true },
});

mockedAxios.post.mockResolvedValue({
  data: { success: true },
});

mockedAxios.put.mockResolvedValue({
  data: { success: true },
});

mockedAxios.delete.mockResolvedValue({
  data: { success: true },
});

mockedAxios.patch.mockResolvedValue({
  data: { success: true },
});
