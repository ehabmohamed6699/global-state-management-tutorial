import { create } from "zustand";

export const usePostsStore = create((set) => ({
    posts: [],
    savePost: (post) => set((state) => ( {posts: !state.posts.find(x => x.id === post.id) ? [...state.posts, post]: [...state.posts]})),
    removePost: (post) => set((state) => ({posts: state.posts.filter(p => p.id !== post.id)}))
}))