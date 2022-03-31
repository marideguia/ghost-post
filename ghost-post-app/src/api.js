export const getPosts = async () => {
    return [
        {
            UserID: "1",
            SessionID: "1",
            // courseID?
            PostID: "1",
            Text: "First comment",
            ParentID: null,
            Upvotes: ["2"],
            CreatedAt: "2021-08-16T23:00:33.010+02:00"             
        },
        {
            UserID: "2",
            SessionID: "1",
            PostID: "2",
            Text: "Second comment",
            ParentID: null,
            Upvotes: ["3"],
            CreatedAt: "2021-08-16T23:00:33.010+02:00",         
        },
        {
            UserID: "2",
            SessionID: "1",
            PostID: "3",
            Text: "First comment first child",
            ParentID: "1",
            Upvotes: ["3"],
            CreatedAt: "2021-08-16T23:00:33.010+02:00",          
        },
        {
            UserID: "1",
            SessionID: "1",
            PostID: "4",
            Text: "Second comment first child",
            ParentID: "2",
            Upvotes: ["2"],
            CreatedAt: "2021-08-16T23:00:33.010+02:00",      
        },
        {
            UserID: "3",
            SessionID: "1",
            PostID: "5",
            Text: "First comment second child",
            ParentID: "1",
            Upvotes: ["3"],
            CreatedAt: "2021-08-16T23:00:33.010+02:00",          
        }
    ]
}

export const createPost = async(text, parentID = null) => {
    return {
        UserID: "1", // Never pass to backend in real use; backend should know which user
        SessionID: "1",
        PostID: Math.random().toString(36).substr(2,9),
        Text: text,
        ParentID: parentID,
        Upvotes: [],
        CreatedAt: new Date().toISOString(),
    }
}

export const updatePost = async (text) => {
    return { text }
}
  
export const deletePost = async () => {
    return {}
}

export const upvotePost = async (upvotes) => {
    return { upvotes }
}

export const removeUpvote = async () => {
    return {}
}
