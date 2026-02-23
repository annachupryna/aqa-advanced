const axios = require('axios');

test("Get posts", async () => {
    var response = await axios.get(`https://jsonplaceholder.typicode.com/posts`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
});

test("Get post by id", async () => {
    var response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.status).toBe(200);
});

test("Create post", async () => {
    const payload = {
        title: "My new post",
        body: "Some text",
        userId: 1
    };
    var response = await axios.post(`https://jsonplaceholder.typicode.com/posts`,
        payload,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.status).toBe(201);
    expect(typeof response.data.id).toBe("number");
});

test("Get comments", async () => {
    var response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
});

test("Get comments by id", async () => {
    var response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
});
