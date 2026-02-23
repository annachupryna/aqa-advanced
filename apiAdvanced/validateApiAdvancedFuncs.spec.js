const { requestToWrongUrl } = require('./funcs');
const { customHeadersAndUrlParams } = require('./funcs');
const { fakeCustomHeadersAndUrlParams } = require('./funcs');
const axios = require('axios');

test("Validate error", async () => {
    const res = await requestToWrongUrl();
    expect(res).toBe(404);
});

test("Validate request format", async () => {
    const headers = { "Content-Type": "application/json" };
    const params = { id: 1, name: "Leanne" };

    const res = await customHeadersAndUrlParams(headers, params);

    expect(res.headers["Content-Type"] || res.headers["content-type"])
        .toBe("application/json");

    expect(res.args.id).toBe("1");
    expect(res.args.name).toBe("Leanne");
});

`
Commented part with mock to keep all in 1 file
`
// jest.mock("axios");

// test("successful request", async () => {
//     axios.get.mockResolvedValue({
//         data: { success: true }
//     });

//     const res = await fakeCustomHeadersAndUrlParams(
//         { Authorization: "token" },
//         { id: 1 }
//     );

//     expect(res).toEqual({ success: true });
//     expect(axios.get).toHaveBeenCalled();
// });

// test("failed request", async () => {
//     axios.get.mockRejectedValue(new Error("Failed"));

//     await expect(
//         fakeCustomHeadersAndUrlParams({}, {})
//     ).rejects.toThrow("Failed");
// });
