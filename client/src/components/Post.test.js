import {render} from "@testing-library/react"
import React from "react"
import Post from "./Post"

describe("Post Component", () => {
    // fake data for testing
    const fakePost = {
        UserID: 2,
        SessionID: 2,
        PostID: 2,
        Text: "Testing post component. TEST",
        ParentID: null,
        Upvotes: [3,2,6],
        CreatedAt: "2022-04-27T23:00:33.010",   
    }

    // test: do elements render?
    it("rendered post text" , () => {  
        // create test post
        const {getByTestId} = render(<Post 
            post={fakePost}
            replies={[]}
            currentUserID={2}
            deletePost={null}
            activePost={{type: null, id: fakePost.PostID}}
            setActivePost={null}
            parentID={null} // root comments always null
            addPost={null}
            updatePost={null}
            upvotePost={null}
            removeUpvote={null}
            arch={false}
        />) 
        // get elements for testing
        const postText=getByTestId("postText")
        // test: do elements render in dom?
        expect(postText).toBeTruthy()
    })

    // test: do elements render?
    it("rendered post createdAt date" , () => {
        // create test post
        const {getByTestId} = render(<Post 
            post={fakePost}
            replies={[]}
            currentUserID={2}
            deletePost={null}
            activePost={{type: null, id: fakePost.PostID}}
            setActivePost={null}
            parentID={null} // root comments always null
            addPost={null}
            updatePost={null}
            upvotePost={null}
            removeUpvote={null}
            arch={false}
        />)
        // get elements for testing
        const postDate=getByTestId("postDate")
        // test: do elements render in dom?
        expect(postDate).toBeTruthy()
    })

    // test: do elements render?
    it("rendered post upvotes value" , () => {
        // create test post
        const {queryByTestId} = render(<Post 
            post={fakePost}
            replies={[]}
            currentUserID={2}
            deletePost={null}
            activePost={{type: null, id: fakePost.PostID}}
            setActivePost={null}
            parentID={null} // root comments always null
            addPost={null}
            updatePost={null}
            upvotePost={null}
            removeUpvote={null}
            arch={false}
        />)
        // get elements for testing
        const postUpvotes=queryByTestId("postUpvotes")
        // test: do elements render in dom?
        expect(postUpvotes).toBeTruthy()
    })

    // test: do elements render expected value?
    it("rendered expected post text" , () => { 
        // create test post
        const {getByTestId} = render(<Post 
            post={fakePost}
            replies={[]}
            currentUserID={2}
            deletePost={null}
            activePost={{type: null, id: fakePost.PostID}}
            setActivePost={null}
            parentID={null} // root comments always null
            addPost={null}
            updatePost={null}
            upvotePost={null}
            removeUpvote={null}
            arch={false}
        />)  
        // get elements for testing
        const postText=getByTestId("postText")
        // test: does the expected value appear in dom?
        expect(postText.innerHTML).toBe(fakePost.Text)
    })

    it("rendered expected createdAt date" , () => { 
        // create test post
        const {getByTestId} = render(<Post 
            post={fakePost}
            replies={[]}
            currentUserID={2}
            deletePost={null}
            activePost={{type: null, id: fakePost.PostID}}
            setActivePost={null}
            parentID={null} // root comments always null
            addPost={null}
            updatePost={null}
            upvotePost={null}
            removeUpvote={null}
            arch={false}
        />)  
        // get elements for testing
        const postText=getByTestId("postText")
        // test: does the expected value appear in dom?
        expect(postText.innerHTML).toBe(fakePost.Text)
    })

    it("rendered expected post upvotes value" , () => {
        // create test post
        const {queryByTestId} = render(<Post 
            post={fakePost}
            replies={[]}
            currentUserID={2}
            deletePost={null}
            activePost={{type: null, id: fakePost.PostID}}
            setActivePost={null}
            parentID={null} // root comments always null
            addPost={null}
            updatePost={null}
            upvotePost={null}
            removeUpvote={null}
            arch={false}
        />)
        // get elements for testing
        const postUpvotes=queryByTestId("postUpvotes")
        // test: do elements render in dom?
        expect(parseInt(postUpvotes.innerHTML)).toBe(fakePost.Upvotes.length)
    })
})