import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Post from "../client/src/components/Post.js";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders post data", async () => {
  const fakePost = {
    UserID: "2",
    SessionID: "1",
    PostID: "2",
    Text: "Test comment",
    ParentID: null,
    Upvotes: ["3","2","6"],
    CreatedAt: "2022-04-27T23:00:33.010",   
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePost)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Post id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.UserID);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.CreatedAt);
  expect(container.textContent).toContain(fakeUser.Text);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});