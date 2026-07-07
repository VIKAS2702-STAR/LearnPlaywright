interface APIResponse {
    body: string;
    headers?: object; // question mark basically means optional parameters
    resposeTime?: number;
}

// Without optional Parameters

let response1: APIResponse = {
    body: "HI",
};

// with Optional Parameters

let response2: APIResponse = {
    body: "HI",
    headers: {},
    resposeTime: 400
};