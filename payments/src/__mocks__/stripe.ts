export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({
      id: 'test_charge_id'
    }), // giữ nguyên như bạn muốn
    list: jest.fn().mockResolvedValue({
      data: [
        { } // mock 1 charge cố định
      ]
    }),
  },
};
