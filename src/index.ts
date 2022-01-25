import { Router } from '@vaadin/router';
import './app';

const routes = [
    {
        path: '/',
        component: 'app',
        
        /*
        children: [
            {
                path: 'blog',
                component: 'blog',
                action: async () => {
                    await import( './components/blog/index' );
                },
                children: [
                    {
                        path: '',
                        redirect: '/blog/posts'
                    },
                    {
                        path: 'posts',
                        component: ''
                    }
                ]
            }
        ]
        */
    }
]

const outlet = document.getElementById( 'outlet' );
export const router = new Router( outlet );
router.setRoutes( routes );