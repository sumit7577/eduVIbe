import { BASE_URL, apiClient } from "."
import { AboutUsRespType, BlogRespType, CategoryRespType, CoreRespType, CourseRespType, HeroRespType, TestimonialRespType, userResponse } from "./types";

const getHero = async (): Promise<Array<HeroRespType>> => {
    const response = await apiClient.get(`${BASE_URL}/hero/`);
    const data = await response.data;
    return data
}

const getAbout = async (): Promise<Array<AboutUsRespType>> => {
    const response = await apiClient.get(`${BASE_URL}/about/`);
    const data = await response.data;
    return data;
}

const getCategory = async (): Promise<Array<CategoryRespType>> => {
    const response = await apiClient.get(`${BASE_URL}/category/`);
    const data = await response.data;
    return data;
}

export interface CoursePaginateType {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<CourseRespType>
}

const getCourse = async (page: number, cat?: string | null): Promise<CoursePaginateType> => {
    const url = typeof cat === "string" ? `/course/?page=${page}&cat=${cat}` : `/course/?page=${page}`;
    const response = await apiClient.get(`${BASE_URL}${url}`);
    const data = await response.data;
    return data;
}

const searchCourse = async (page: number, title: string): Promise<CoursePaginateType> => {
    const url = `/search/course?page=${page}&name=${title}`
    const response = await apiClient.get(`${BASE_URL}${url}`);
    const data = await response.data;
    return data;
}

export interface SingleCourse {
    paid: boolean,
    instructur: boolean,
    data: Array<CourseRespType>
}

const getSingleCourse = async (id: number | string): Promise<SingleCourse> => {
    const response = await apiClient.get(`${BASE_URL}/course/${id}`);
    const data = await response.data;
    return data;
}

const completeCheckout = async (id: number | string): Promise<string> => {
    const response = await apiClient.get(`${BASE_URL}/checkout/${id}`);
    const data = await response.data;
    return data;
}

const getTestimonial = async (): Promise<Array<TestimonialRespType>> => {
    const response = await apiClient.get(`${BASE_URL}/testimonial/`);
    const data = await response.data;
    return data;
}

interface BlogPaginateType {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<BlogRespType>
}

const getBlogs = async (page = 1): Promise<BlogPaginateType> => {
    const response = await apiClient.get(`${BASE_URL}/blog/?page=${page}`);
    const data = await response.data;
    return data;
}

const searchBlogs = async (page: number, title: string): Promise<BlogPaginateType> => {
    const url = `/search/blog?page=${page}&title=${title}`
    const response = await apiClient.get(`${BASE_URL}${url}`);
    const data = await response.data;
    return data;
}

const getCore = async (): Promise<Array<CoreRespType>> => {
    const response = await apiClient.get(`${BASE_URL}/core/`);
    const data = await response.data;
    return data;
}

const loginUser = async (prop: { username: string, password: string }): Promise<{ success: boolean, token: string, user: typeof userResponse }> => {
    const response = await apiClient.post(`${BASE_URL}/login/`, { ...prop });
    const data = await response.data;
    return data;
}

const registerUser = async (prop: Partial<typeof userResponse>): Promise<typeof userResponse> => {
    const formData = new FormData()
    Object.keys(prop).map(item => {
        if (prop[item] !== null) {
            formData.append(item, prop[item])
        }
    })
    const response = await apiClient.post(`${BASE_URL}/register/`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    const data = await response.data;
    return data;
}


const homeUser = async (): Promise<typeof userResponse> => {
    const response = await apiClient.get(`${BASE_URL}/`);
    const data = await response.data;
    return data;
}

export {
    getHero, getAbout, getCategory, getCourse, getTestimonial,
    getBlogs, getCore, getSingleCourse, loginUser, registerUser, homeUser,
    completeCheckout,
    searchCourse,searchBlogs
}