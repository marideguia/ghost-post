export const getPosts = async () => {
    return [
        {
            SessionID: "1",
            PostID: "1",
            Text: "First comment",
            ParentID: null,
            UpvoteCount: 2,
            CreatedAt: "2021-08-16T23:00:33.010+02:00"   
        },
        {
            SessionID: "1",
            PostID: "2",
            Text: "Second comment",
            ParentID: null,
            UpvoteCount: 3,
            CreatedAt: "2021-08-16T23:00:33.010+02:00",         
        },
        {
            SessionID: "1",
            PostID: "3",
            Text: "First comment first child",
            ParentID: "1",
            UpvoteCount: 1,
            CreatedAt: "2021-08-16T23:00:33.010+02:00",          
        },
        {
            SessionID: "1",
            PostID: "4",
            Text: "Second comment first child",
            ParentID: "2",
            UpvoteCount: 2,
            CreatedAt: "2021-08-16T23:00:33.010+02:00",      
        },
        {
            SessionID: "1",
            PostID: "5",
            Text: "First comment second child",
            ParentID: "1",
            UpvoteCount: 2,
            CreatedAt: "2021-08-16T23:00:33.010+02:00",          
        }
    ]
}