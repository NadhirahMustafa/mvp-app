import { dataInterface, commentResultInterface, commentsDataInterface, newsProps, userInterface } from "../interface/product.interface";

export const getAllProducts = () => {
    return new Promise<dataInterface>((resolve, reject) => {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    })
};

export const getUser = () => {
    return new Promise<userInterface>((resolve, reject) => {
    fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    })
};

export const getComments = () => {
    return new Promise<commentResultInterface>((resolve, reject) => {
    fetch('https://dummyjson.com/comments')
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    })
};

export const addReviewApi = (inputReview: string, userId: number) => {
    return new Promise<commentsDataInterface>((resolve, reject) => {
        fetch('https://dummyjson.com/comments/add', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              body: inputReview,
              postId: 3,
              userId: userId,
            }),
          })
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    })
};

export const getNews = () => {
    return new Promise<newsProps>((resolve, reject) => {
    fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    })
};