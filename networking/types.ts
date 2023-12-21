const videoDetails = {
    "guid": "a68a2904-bec9-48d6-a0fb-26d60ecadb07",
    "title": "535aea47-3043-4762-b4ab-fc6302b212f2.mp4",
    "views": 0,
    "width": 0,
    "height": 0,
    "length": 0,
    "status": 0,
    "moments": [],
    "captions": [],
    "category": "unknown",
    "chapters": [],
    "isPublic": false,
    "metaTags": [],
    "rotation": null,
    "framerate": 0,
    "storageSize": 0,
    "collectionId": "",
    "dateUploaded": "2023-12-20T15:05:33.6472095Z",
    "encodeProgress": 0,
    "hasMP4Fallback": false,
    "thumbnailCount": 0,
    "totalWatchTime": 0,
    "videoLibraryId": 186666,
    "averageWatchTime": 0,
    "thumbnailFileName": "thumbnail.jpg",
    "transcodingMessages": [],
    "availableResolutions": null
}


const videoResponse = {
    "id": 1,
    "file": "https://api.majoringlearn.com/Files/videos/retrowave-sunset.1920x1080.mp4",
    "locked": true,
    "video_information": videoDetails
}

export const sectionResponse = {
    "id": 1,
    "title": "chapter test 1",
    "title2": "start from here",
    "description": "learn html,css js",
    "icon": "",
    "image": "",
    "locked": false,
    "duration": "00:01:40",
    "video":[videoResponse]
}


const userResponse = {
    "id": 1,
    "password": "passwd",
    "last_login": "2023-12-06T14:24:22.780529Z",
    "is_superuser": true,
    "username": "admin",
    "first_name": "",
    "last_name": "",
    "email": "admin@gmail.com",
    "is_staff": true,
    "is_active": true,
    "date_joined": "2023-12-06T09:41:06.565097Z",
    "role": "",
    "groups": Array<String>,
    "user_permissions": Array<String>
}

const AboutUsResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 50
    },
    "title2": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title2",
        "max_length": 100
    },
    "description": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Description"
    },
    "image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Image",
        "max_length": 100
    },
    "sections": {
        "type": [sectionResponse],
        "required": true,
        "read_only": false,
        "label": "Sections"
    }
}


type AboutUsType = typeof AboutUsResponse;

export type AboutUsRespType = {
    [key in keyof AboutUsType]: AboutUsType[key]["type"]
} & { "sections": Array<typeof sectionResponse> }

const CategoryResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "header": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Header",
        "max_length": 50
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 20
    },
    "description": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Description",
        "max_length": 120
    },
    "image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Image",
        "max_length": 100
    }
}

type CategoryType = typeof CategoryResponse;
export type CategoryRespType = {
    [key in keyof CategoryType]: CategoryType[key]["type"]
}


const CourseResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 50
    },
    "description": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Description"
    },
    "image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Image",
        "max_length": 100
    },
    "price": {
        "type": 1,
        "required": false,
        "read_only": false,
        "label": "Price",
        "min_value": -2147483648,
        "max_value": 2147483647
    },
    "discount_price": {
        "type": 1,
        "required": false,
        "read_only": false,
        "label": "Discount price",
        "min_value": -2147483648,
        "max_value": 2147483647
    },
    "duration": {
        "type": "field",
        "required": false,
        "read_only": false,
        "label": "Duration"
    },
    "students": {
        "type": [userResponse],
        "required": true,
        "read_only": false,
        "label": "User"
    },
    "instructor": {
        "type": userResponse,
        "required": true,
        "read_only": false,
        "label": "User"
    },
    "lessons": {
        "type": [sectionResponse],
        "required": true,
        "read_only": false,
        "label": "Lessons"
    },
    "video_details": {
        "type": videoDetails,
        "required": false,
        "read_only": false,
        "label": "Video details"
    },
}

type CourseType = typeof CourseResponse;
export type CourseRespType = {
    [key in keyof CourseType]: CourseType[key]["type"]
}

const TestimonialResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 50
    },
    "image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Image",
        "max_length": 100
    },
    "sections": {
        "type": [sectionResponse],
        "required": true,
        "read_only": false,
        "label": "Sections"
    }
}

type TestimonialType = typeof TestimonialResponse;
export type TestimonialRespType = {
    [key in keyof TestimonialType]: TestimonialType[key]["type"]
}

const CoreResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 50
    },
    "title2": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title2",
        "max_length": 100
    },
    "description": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Description"
    },
    "thumbnail": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Thumbnail",
        "max_length": 100
    },
    "video": {
        "type": "file upload",
        "required": false,
        "read_only": false,
        "label": "Video",
        "max_length": 100
    },
    "video_link": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Video link",
        "max_length": 200
    },
    "sections": {
        "type": [sectionResponse],
        "required": true,
        "read_only": false,
        "label": "Sections"
    }
}

type CoreType = typeof CoreResponse;
export type CoreRespType = {
    [key in keyof CoreType]: CoreType[key]["type"]
}

const BlogResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 50
    },
    "description": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Description"
    },
    "image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Image",
        "max_length": 100
    },
    "date": {
        "type": "datetime",
        "required": false,
        "read_only": false,
        "label": "Date"
    },
    "user": {
        "type": userResponse,
        "required": true,
        "read_only": false,
        "label": "User"
    }
}

type BlogType = typeof BlogResponse;
export type BlogRespType = {
    [key in keyof BlogType]: BlogType[key]["type"]
}


const HeroResponse = {
    "id": {
        "type": 1,
        "required": false,
        "read_only": true,
        "label": "ID"
    },
    "title": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title",
        "max_length": 50
    },
    "title2": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Title2",
        "max_length": 100
    },
    "description": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Description"
    },
    "other_image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Other image",
        "max_length": 100
    },
    "meet_link": {
        "type": "string",
        "required": false,
        "read_only": false,
        "label": "Meet link",
        "max_length": 250
    },
    "meet_name": {
        "type": "string",
        "required": true,
        "read_only": false,
        "label": "Meet name",
        "max_length": 50
    },
    "meet_image": {
        "type": "image upload",
        "required": false,
        "read_only": false,
        "label": "Meet image",
        "max_length": 100
    },
    "meet_time": {
        "type": "datetime",
        "required": false,
        "read_only": false,
        "label": "Meet time"
    },
    "featured_course": {
        "type": CourseResponse,
        "required": false,
        "read_only": false,
        "label": "Featured course"
    }
}

type HeroType = typeof HeroResponse;
export type HeroRespType = {
    [key in keyof HeroType]: HeroType[key]["type"]
} & { "featured_course": CourseRespType }