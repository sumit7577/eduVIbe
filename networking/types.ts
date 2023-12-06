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
        "type": 1,
        "required": false,
        "read_only": false,
        "label": "Featured course"
    }
}

type HeroType = typeof HeroResponse;
export type HeroRespType = {
    [key in keyof HeroType]: HeroType[key]["type"]
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
        "type": 1,
        "required": true,
        "read_only": false,
        "label": "Sections"
    }
}

type AboutUsType = typeof AboutUsResponse;
export type AboutUsRespType = {
    [key in keyof AboutUsType]: AboutUsType[key]["type"]
}

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
    "user": {
        "type": "field",
        "required": true,
        "read_only": false,
        "label": "User"
    },
    "lessons": {
        "type": 1,
        "required": true,
        "read_only": false,
        "label": "Lessons"
    }
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
        "type": 1,
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
        "type": 1,
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
        "type": 1,
        "required": true,
        "read_only": false,
        "label": "User"
    }
}

type BlogType = typeof BlogResponse;
export type BlogRespType = {
    [key in keyof BlogType]: BlogType[key]["type"]
}
