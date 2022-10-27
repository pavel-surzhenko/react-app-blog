// Core
import axios from 'axios';

// Instruments
import { AUTH_URL, FEED_URL } from './config';

export const api = {
    get token() {
        return localStorage.getItem('token');
    },
    auth: {
        signup(userInfo) {
            return fetch(`${AUTH_URL}/register`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
        },
        async login(credentials) {
            const { data } = await axios.post(`${AUTH_URL}/login`,
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

            return data;
        },
        async auth() {
            await axios.get(`${AUTH_URL}/auth`, {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
        },
        logout() {
            return fetch(`${AUTH_URL}/logout`, {
                method:  'GET',
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
        },
    },
    posts: {
        async fetch() {
            const { data } = await axios.get(FEED_URL, {
                headers: {
                    Authorization: this.token,
                },
            });

            return data;
        },
        async create(post) {
            const { data } = await axios.post(FEED_URL,
                post,
                {
                    headers: {
                        Authorization: `Bearer ${api.token}`,
                    },
                });

            return data;
        },
        remove(postId) {
            return fetch(`${FEED_URL}/${postId}`, {
                method:  'DELETE',
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
        },
        like(postId) {
            return fetch(`${FEED_URL}/${postId}/like`, {
                method:  'PUT',
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
        },
        unlike(postId) {
            return fetch(`${FEED_URL}/${postId}/unlike`, {
                method:  'PUT',
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });
        },
        async comment({ hash, body }) {
            const { data } = await axios.put(`${FEED_URL}/${hash}/comment`,
                { body },
                {
                    headers: {
                        Authorization: `Bearer ${api.token}`,
                    },
                });

            return data;
        },
        async getComments() {
            const { data } = await axios.get(`${FEED_URL}/comments`);

            return data;
        },
        async getPostById(postHash) {
            const { data } = await axios.get(`${FEED_URL}/${postHash}`);

            return data;
        },
    },
    profile: {
        async fetch() {
            const { data } = await axios.get(`${AUTH_URL}/profile`, {
                headers: {
                    Authorization: `Bearer ${api.token}`,
                },
            });

            return data;
        },
        updateProfile(profileInfo) {
            return fetch(`${AUTH_URL}/users`, {
                method:  'PUT',
                headers: {
                    Authorization:  this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileInfo),
            });
        },
        updateAvatar(avatarFormData) {
            return fetch(`${AUTH_URL}/image`, {
                method:  'POST',
                headers: {
                    Authorization: this.token,
                },
                body: avatarFormData,
            });
        },
    },
    users: {
        fetch() {
            return fetch(`${AUTH_URL}/users`, {
                method:  'GET',
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
};
