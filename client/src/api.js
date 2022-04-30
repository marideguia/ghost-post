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
            CreatedAt: "2021-08-16T23:00:33.010"             
        },
        {
            UserID: "2",
            SessionID: "1",
            PostID: "2",
            Text: "Second comment",
            ParentID: null,
            Upvotes: ["3"],
            CreatedAt: "2021-08-16T23:00:33.010",         
        },
        {
            UserID: "2",
            SessionID: "1",
            PostID: "3",
            Text: "First comment first child",
            ParentID: "1",
            Upvotes: ["3"],
            CreatedAt: "2021-08-16T23:00:33.010",          
        },
        {
            UserID: "1",
            SessionID: "1",
            PostID: "4",
            Text: "Second comment first child",
            ParentID: "2",
            Upvotes: ["2"],
            CreatedAt: "2021-08-16T23:00:33.010",      
        },
        {
            UserID: "3",
            SessionID: "1",
            PostID: "5",
            Text: "First comment second child",
            ParentID: "1",
            Upvotes: ["3"],
            CreatedAt: "2021-08-16T23:00:33.010",          
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

export const getCourses = async () => {
    return [
        {
            CourseID: "1",
            Title: "Senior Capstone",
            Students: ["1","2","3","4",],
            CreatedAt: "2021-08-16T23:00:33.010",
            Sessions: ["1","2","3","4",]       
        },
        {
            CourseID: "2",
            Title: "Neural Networks",
            Students: ["1","2","3","4",],
            CreatedAt: "2021-09-16T23:00:33.010",
            Sessions: ["1","2","3","4",]
        },
        {
            CourseID: "3",
            Title: "PHYS 2401",
            Students: ["1","2","3","4","5"],
            CreatedAt: "2021-10-16T23:00:33.010",
            Sessions: ["1","2","3","4",]
        }
    ]
}
 
export const getSessions = async () => {
    return [
        {
            SessionID: "1",
            CreatorID: "1",
            title: "Senior Capstone - Feb, 12 2022",
            Students: ["1","2","3","4",],
            CreatedAt: "2022-02-12T23:00:33.010"             
        },
        {
            SessionID: "2",
            CreatorID: "1",
            title: "Neural Networks - ReLU Activation",
            Students: ["1","2","3","4",],
            CreatedAt: "2021-09-16T23:00:33.010"
        },
        {
            SessionID: "3",
            CreatorID: "3",
            title: "PHYS 2401 - Magnetic Fields pt. 1",
            Students: ["1","2","3","4","5"],
            CreatedAt: "2021-10-16T23:00:33.010"
        }
    ]
}

export const CarouselItems= [
    {
        title: "Join a session",
        text: "If you have a session code from your presenter, you can join their session now and begin asking questions.",
        button_text: "Join now"
    },
    {
        title: "Create a session",
        text: "Want to connect with your audience? Click below to start a new session.",
        button_text: "Create now"
    },
    {
        title: "Create a course",
        text: "Need all your sessions in one place? Click below to create a course.",
        button_text: "Create now"
    },
    {
        title: "Join a course",
        text: "Looking for your lecturer's next session? Click to join their course.",
        button_text: "Join now"
    },

]


